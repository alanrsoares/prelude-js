import type { Predicate } from '../types.d.ts'
import curry from '../Func/curry.js'

/**
 * Returns the index of the first item that satisfies the predicate, or -1; curried.
 *
 * @example
 * ```ts
 * findIndex((x: number) => x > 2, [1, 2, 3]) //=> 2
 * ```
 */
const findIndex = curry((fn: Predicate<unknown>, xs: readonly unknown[]) =>
  xs.findIndex(fn),
) as unknown as <A>(fn: Predicate<A>, xs: readonly A[]) => number

export default findIndex
