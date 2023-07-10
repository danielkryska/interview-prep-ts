interface Node<T> {
    data: T;
    child: Node<any> | null
}

export class LinkedList<DataType> {
    _head: Node<DataType> | null = null;
    _tail: Node<DataType> | null = null;

    get head(): Node<DataType> | null {
        return this._head;
    }

    get tail(): Node<DataType> | null {
        return this._tail;
    }

    add<T>(data: DataType): void {
        const node: Node<DataType> = {
            data,
            child: null
        }

        if (this._head === null) {
            this._head = node;
            return;
        }

        if (this._tail === null) {
            this._head.child = node;
            this._tail = node;
            return;
        }

        (this._tail as Node<any>).child = node;
        this._tail = node;
    }
    removeHead(): void {
        this._head = null;
        this._tail = null;
    }
    removeLast(): void {
        if (this._head === null) {
            return;
        }

        if (this._tail === null) {
            this._head = null;
            return;
        }

        if (this._head.child?.child === null) {
            this._tail = null;
            this._head.child = null;
            return;
        }

        let lastNode = this._head;
        while(!!lastNode?.child?.child) {
            lastNode = (lastNode as Node<any>).child as Node<any>;
        }

        lastNode.child = null;
        this._tail = lastNode;
    }
    replaceTail<T>(data: DataType): void {
        const newNode: Node<DataType> = {
            data,
            child: null
        }

        if (this._head === null) {
            return;
        }

        if (this._tail === null) {
            this._head = newNode;
            return;
        }

        let lastNode = this._head;
        while(!!lastNode?.child?.child) {
            lastNode = (lastNode as Node<any>).child as Node<any>;
        }

        lastNode.child = newNode;
        this._tail = newNode;
    }
    replaceHead<T>(data: DataType): void {
        const newNode: Node<DataType> = {
            data,
            child: null
        }
        this._head = newNode;
        this._tail = null;
    }
}
