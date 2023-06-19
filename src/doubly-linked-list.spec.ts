import { DoublyLinkedList } from "./doubly-linked-list";


describe('Doubly linked list', () => {
    it('should add element', () => {
        const linkedList = new DoublyLinkedList();
        const node1 = { data: 1, child: null, parent: null };
        linkedList.add(node1);
        
        expect(linkedList._head?.data).toEqual(node1.data);
        expect(linkedList._tail).toEqual(null);

        const node2 = { data: 2, child: null, parent: null };
        linkedList.add(node2);

        expect(linkedList._head?.data).toEqual(node1.data);
        expect(node2.data).toEqual(linkedList._tail?.data);
        expect(linkedList._tail?.parent?.data).toEqual(node1.data);

        const node3 = { data: 'test', child: null, parent: null };
        linkedList.add(node3);

        expect(linkedList._head?.data).toEqual(node1.data);
        expect(node3.data).toEqual(linkedList._tail?.data);
        expect(linkedList._tail?.parent?.data).toEqual(node2.data);
    });
    it('should remove head', () => {
        const linkedList = new DoublyLinkedList();
        const node1 = { data: 1, child: null, parent: null };

        linkedList.add(node1);
        linkedList.removeHead();

        expect(linkedList._head).toEqual(null);
        expect(linkedList._tail).toEqual(null);
    });
    it('should remove last node', () => {
        const linkedList = new DoublyLinkedList();

        const node1 = { data: 1, child: null, parent: null };
        linkedList.add(node1);
        const node2 = { data: 2, child: null, parent: null };
        linkedList.add(node2);
        const node3 = { data: 'test', child: null, parent: null };
        linkedList.add(node3);

        linkedList.removeLast();
        expect(node1.data).toEqual(linkedList._head?.data);
        expect(node2.data).toEqual(linkedList._tail?.data);

        linkedList.removeLast();
        expect(node1.data).toEqual(linkedList._head?.data);
        expect(linkedList._tail).toEqual(null);

        linkedList.removeLast();
        expect(linkedList._head).toEqual(null);
        expect(linkedList._tail).toEqual(null);
    });
    it('should replace tail', () => {
        const linkedList = new DoublyLinkedList();

        const node1 = { data: 1, child: null, parent: null };
        linkedList.add(node1);
        const node2 = { data: 2, child: null, parent: null };
        linkedList.add(node2);
        const node3 = { data: 'test', child: null, parent: null };

        linkedList.replaceTail(node3);
        expect(node1.data).toEqual(linkedList._head?.data);
        expect(node3.data).toEqual(linkedList._tail?.data);
    });
    it('should replace head', () => {
        const linkedList = new DoublyLinkedList();

        const node1 = { data: 1, child: null, parent: null };
        linkedList.add(node1);
        const node2 = { data: 2, child: null, parent: null };
        linkedList.add(node2);
        const node3 = { data: 'test', child: null, parent: null };

        linkedList.replaceHead(node3);
        expect(node3.data).toEqual(linkedList._head?.data);
        expect(linkedList._tail).toEqual(null);
    });
});