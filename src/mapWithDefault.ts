
/**
 * Provides an extension of a standard Map, with the extra feaure of providing a default value
 * when a key does not exist.
 *
 * @param K type of the keys in this Map
 * @param V type of the values in this Map
 */
export class MapWithDefault<K, V> extends Map {

    /**
     * @param defaultValue the value to return from the get-method when the specified key does not exist in the Map.
     */
    constructor(private defaultValue: V) {
        super()
    }

    /**
     * @param key the key to lookup a value for in the Map
     * @returns the value under `key` if it is available, or `defaultValue` if no value was found
     */
    get(key: K): V {
        return super.get(key) || this.defaultValue
    }
}
