import type { Comparer } from '../types.js'
import curry from '../Func/curry.js'

/**
 * Returns a new list sorted with a custom comparator; curried.
 *
 * @example
 * ```ts
 * sortWith((a: number, b: number) => a - b, [3, 1, 2]) //=> [1, 2, 3]
 * ```
 */
const sortWith = curry((fn: Comparer<unknown>, xs: readonly unknown[]) =>
  xs.concat().sort(fn),
) as unknown as <A>(fn: Comparer<A>, xs: readonly A[]) => A[]

export default sortWith
