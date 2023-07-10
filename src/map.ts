export class Map<KeyType, ValueType> {
    _keys: KeyType[] = [];
    _values: ValueType[] = [];

    get keys() {
        return this._keys;
    }
    get values() {
        return this._values;
    }

    get(key: KeyType): ValueType | undefined {
        const index = this._keys.indexOf(key);
        return index >= 0 ? this._values[index] : undefined;
    }
    set(key: KeyType, value: ValueType): void {
        const index = this._keys.indexOf(key);
        const hasKey = index >= 0;

        if (hasKey) {
            this._values[index] = value;
            return;
        }

        this._keys.push(key);
        this._values.push(value);
    }
    has(key: KeyType): boolean {
        return this._keys.includes(key);
    }
    delete(key: KeyType) {
        const hasKey = this.has(key);
        if (!hasKey) {
            return;
        }

        const index = this._keys.indexOf(key);
        delete this._keys[index];
        delete this._values[index];
    }
    forEach(callback: (value: ValueType, key: KeyType) => void): void {
        this._keys.forEach((key, index) => callback(this._values[index], key));
    }
}