import { DoublyLinkedList } from "./doubly-linked-list";


describe('Doubly linked list', () => {
    it('should add element', () => {
        const linkedList = new DoublyLinkedList();
        linkedList.add(1);
        
        expect(linkedList._head?.data).toEqual(1);
        expect(linkedList._tail).toEqual(null);

        linkedList.add(2);

        expect(linkedList._head?.data).toEqual(1);
        expect(2).toEqual(linkedList._tail?.data);
        expect(linkedList._tail?.parent?.data).toEqual(1);

        linkedList.add(3);

        expect(linkedList._head?.data).toEqual(1);
        expect(3).toEqual(linkedList._tail?.data);
        expect(linkedList._tail?.parent?.data).toEqual(2);
    });
    it('should remove head', () => {
        const linkedList = new DoublyLinkedList();

        linkedList.add(1);
        linkedList.removeHead();

        expect(linkedList._head).toEqual(null);
        expect(linkedList._tail).toEqual(null);
    });
    it('should remove last node', () => {
        const linkedList = new DoublyLinkedList();

        linkedList.add(1);
        linkedList.add(2);
        linkedList.add(3);

        linkedList.removeLast();
        expect(1).toEqual(linkedList._head?.data);
        expect(2).toEqual(linkedList._tail?.data);

        linkedList.removeLast();
        expect(1).toEqual(linkedList._head?.data);
        expect(linkedList._tail).toEqual(null);

        linkedList.removeLast();
        expect(linkedList._head).toEqual(null);
        expect(linkedList._tail).toEqual(null);
    });
    it('should replace tail', () => {
        const linkedList = new DoublyLinkedList();

        linkedList.add(1);
        linkedList.add(2);
        linkedList.replaceTail(3);
        expect(1).toEqual(linkedList._head?.data);
        expect(3).toEqual(linkedList._tail?.data);
    });
    it('should replace head', () => {
        const linkedList = new DoublyLinkedList();

        linkedList.add(1);
        linkedList.add(2);

        linkedList.replaceHead(3);
        expect(3).toEqual(linkedList._head?.data);
        expect(linkedList._tail).toEqual(null);
    });
});