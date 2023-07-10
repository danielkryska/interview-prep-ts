describe('Map', () => {
    it('should set a key', () => {
        const map = new Map<string, any>();
        map.set('test', 2);
        expect(map.has('test')).toBe(true);
        expect(map.get('test')).toBe(2);
    });
    it('should delete a key', () => {
        const map = new Map<string, any>();
        map.set('test', 2);
        map.delete('test');
        expect(map.has('test')).toBe(false);
        expect(map.get('test')).toBe(undefined);
    });
});