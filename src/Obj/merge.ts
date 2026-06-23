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
 * merge({ a: 1, b: 2 }, { b: 3 }) //=> { a: 1, b: 3 }
 * ```
 */
const merge = (Object.assign ||
  ((y: Record<PropertyKey, unknown>, ...xs: Record<PropertyKey, unknown>[]) =>
    xs.reduce(reducer, y))) as unknown as {
  <A extends object>(target: A): A
  <A extends object, B extends object>(target: A, b: B): A & B
  <A extends object, B extends object, C extends object>(target: A, b: B, c: C): A & B & C
  <A extends object>(target: A, ...sources: object[]): A & Record<string, unknown>
}

export default merge
