import { Stack } from "./stack";

describe('Stack', () => {
    it('should push', () => {
        const stack = new Stack();
        stack.push("test");
        expect(stack.peek()).toStrictEqual("test");
    });
    it('should pop last element', () => {
        const stack = new Stack();
        stack.push("test");
        expect(stack.peek()).toStrictEqual("test");
        stack.pop();
        expect(stack.peek()).toStrictEqual(null);
    });
});