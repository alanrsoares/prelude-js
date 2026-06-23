/**
 * Returns a deep clone of the value via JSON round-tripping.
 *
 * @example
 * ```ts
 * clone({ a: 1, b: 2 }) //=> { a: 1, b: 2 }
 * ```
 */
const clone = ((x: unknown) => JSON.parse(JSON.stringify(x))) as unknown as <T>(value: T) => T

export default clone
