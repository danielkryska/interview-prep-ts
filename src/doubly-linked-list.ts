interface Node<T> {
    data: T;
    parent: Node<T> | null;
    child: Node<any> | null;
}

export class DoublyLinkedList<DataType> {
    _head: Node<DataType> | null = null;
    _tail: Node<DataType> | null = null;

    get head(): Node<DataType> | null {
        return this._head;
    }

    get tail(): Node<DataType> | null {
        return this._tail;
    }

    add(data: DataType): void {
        const node: Node<DataType> = {
            data,
            parent: null,
            child: null
        }

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
        (this._tail as Node<DataType>).child = node;
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
            lastNode = (lastNode as Node<DataType>).child as Node<DataType>;
        }

        lastNode.child = null;
        this._tail = lastNode;
    }
    replaceTail(data: DataType): void {
        const newNode: Node<DataType> = {
            data,
            parent: null,
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
    replaceHead(data: DataType): void {
        const newNode: Node<DataType> = {
            data,
            parent: null,
            child: null
        }
        this._head = newNode;
        this._tail = null;
    }
}
