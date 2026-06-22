import reduce from './reduce.js'

const reducer = reduce((acc: Record<PropertyKey, unknown>, key: string, value: unknown) => {
  acc[key] = value
  return acc
}) as unknown as (
  acc: Record<PropertyKey, unknown>,
  cur: Record<PropertyKey, unknown>,
) => Record<PropertyKey, unknown>

/**
 * Merges any number of source objects into the first; later sources win.
 *
 * @example
 * ```ts
 * merge({ a: 2, c: 9 }, { b: 3 }, { a: 4 }) //=> { a: 4, b: 3, c: 9 }
 * ```
 */
const merge = (Object.assign ||
  ((y: Record<PropertyKey, unknown>, ...xs: Record<PropertyKey, unknown>[]) =>
    xs.reduce(reducer, y))) as unknown as <T extends object>(
  target: T,
  ...sources: Partial<T>[]
) => T

export default merge
