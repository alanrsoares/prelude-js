import keys from './keys.js'

/**
 * Returns the own enumerable values of an object.
 *
 * @example
 * ```ts
 * values({ a: 2, b: 3 }) //=> [2, 3]
 * ```
 */
const values = (Object.values ||
  ((x: Record<PropertyKey, unknown>) => keys(x).map((k) => x[k]))) as unknown as <T extends object>(
  obj: T,
) => Array<T[keyof T]>

export default values
