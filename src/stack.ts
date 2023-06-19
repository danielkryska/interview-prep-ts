import { LinkedList } from "./linked-list";

export class Stack {
    _counter = 0;
    _linkedList = new LinkedList();

    get counter() {
        return this._counter;
    }

    pop(): any | null {
        if (this._counter <= 0) {
            return null;
        }

        let data = this.peek();
        this._linkedList.removeLast();
        this._counter--;
        return data;
    }

    push(data: any): void {
        this._linkedList.add({ data, child: null });
        this._counter++;
    }

    peek(): any | null {
        if (this._counter === 0) {
            return null;
        }

        const dataToParse = (this._counter === 1 ? this._linkedList._head : this._linkedList._tail)?.data;
        return JSON.parse(JSON.stringify(dataToParse));
    }
}