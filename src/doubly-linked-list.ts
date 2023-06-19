interface Node<T> {
    data: T;
    parent: Node<T> | null;
    child: Node<any> | null;
}

export class DoublyLinkedList {
    _head: Node<any> | null = null;
    _tail: Node<any> | null = null;

    get head(): Node<any> | null {
        return this._head;
    }

    get tail(): Node<any> | null {
        return this._tail;
    }

    add<T>(node: Node<T> & { child: null }): void {
        if (this._head === null) {
            this._head = node;
            return;
        }

        if (this._tail === null) {
            node.parent = this._head;
            this._head.child = node;
            this._tail = node;
            return;
        }

        node.parent = this._tail;
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
    replaceTail<T>(newNode: Node<T> & { child: null }): void {
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
    replaceHead<T>(newNode: Node<T> & { child: null }): void {
        this._head = newNode;
        this._tail = null;
    }
}
