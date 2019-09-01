export class MapWithDefault<K, V> extends Map {
    constructor(private defaultValue: V) {
        super()
    }

    get(key: K) {
        return super.get(key) || this.defaultValue
    }
}