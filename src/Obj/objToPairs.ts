import map from './map.js'

/**
 * Turns an object into a list of `[key, value]` pairs.
 *
 * @example
 * ```ts
 * objToPairs({ a: 'b', c: 'd' }) //=> [['a', 'b'], ['c', 'd']]
 * ```
 */
const objToPairs = map((k, v) => [k, v]) as unknown as <T extends Record<PropertyKey, unknown>>(
  obj: T,
) => Array<readonly [keyof T, T[keyof T]]>

export default objToPairs
