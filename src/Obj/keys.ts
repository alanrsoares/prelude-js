/**
 * Returns the own enumerable keys of an object.
 *
 * @example
 * ```ts
 * keys({ a: 2, b: 3 }) //=> ['a', 'b']
 * ```
 */
const keys = Object.keys as unknown as <T extends object>(obj: T) => Array<keyof T>

export default keys
