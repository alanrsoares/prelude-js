import curry from '../Func/curry.js'
import type { Mapper } from '../types.js'

/**
 * Applies a function to each item, returning a new list; curried.
 *
 * @example
 * ```ts
 * map((x: number) => x + 1, [1, 2, 3]) //=> [2, 3, 4]
 * ```
 */
const map = curry((fn: Mapper<unknown, unknown>, xs: readonly unknown[]) =>
  xs.map(fn),
) as unknown as {
  <A, B>(fn: Mapper<A, B>): (xs: readonly A[]) => B[]
  <A, B>(fn: Mapper<A, B>, xs: readonly A[]): B[]
}

export default map
