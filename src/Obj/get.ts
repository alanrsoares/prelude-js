import curry from '../Func/curry.js'

/**
 * Reads a member from an object by key; key-first and curried.
 *
 * @example
 * ```ts
 * get('foo', { foo: 'bar' }) //=> 'bar'
 * ```
 */
const get = curry(
  (member: PropertyKey, x: Record<PropertyKey, unknown>) => x[member],
) as unknown as {
  <K extends PropertyKey>(key: K): <T extends Record<K, unknown>>(obj: T) => T[K]
  <T, K extends keyof T>(key: K, obj: T): T[K]
}

export default get
