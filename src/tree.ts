interface Node<DataType> {
    data: DataType;
    left: Node<DataType> | null;
    right: Node<DataType> | null;
}

const toNode = <T>(data: T): Node<T> => ({
    data,
    left: null,
    right: null
});
const findBy = <T>(node: Node<T> | null, filter: (node: Node<T>) => boolean): Node<T> | null => {
    if (!node) {
        return null;
    }
    
    if (filter(node)) {
        return node;
    }

    return findBy(node.left, filter) || findBy(node.right, filter);
}
const findNodeWithoutAChild = <T>(node: Node<T>): Node<T> => {
    if (node.left && node.right) {
        return findNodeWithoutAChild(node.left) || findNodeWithoutAChild(node.right);
    }

    return node;
}
const sortByLevels = <T>(node: Node<T>, map: { [level: number]: Node<T>[] } = {}, level = 0) => {
    map[level] = map[level] ? [...map[level], node] : [node];

    if (node.left) {
        sortByLevels(node.left, map, level + 1);
    }

    if (node.right) {
        sortByLevels(node.right, map, level + 1);
    }
    
    return map;
}
export class BinarySearchTree<DataType> {
    _root: Node<DataType> | null = null;

    insert(data: DataType): void {
        const node = toNode(data);

        if (this._root === null) {
            this._root = node;
            return;
        }

        const nodeWithoutAChild = findNodeWithoutAChild(this._root);
        if (node.left) {
            node.right = node;
            return;
        }

        node.left = node;
    }
    remove(data: DataType): void {
        if (this._root === null) {
            return;
        }

        if (!this._root.left && !this._root.right) {
            this._root = null;
            return;
        }

        const dataNodeParent = findBy(this._root, (node) => node.left?.data === data || node.right?.data === data);
        const lastNodeParent = findBy(this._root, (node) => )

        // find last level
        // find last child in last level
    }
}