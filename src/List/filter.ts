import type { Predicate } from '../types.js'
import curry from '../Func/curry.js'

/**
 * Keeps the items that satisfy the predicate; curried.
 *
 * @example
 * ```ts
 * filter((x: number) => x > 3, [1, 2, 3, 4, 5]) //=> [4, 5]
 * ```
 */
const filter = curry((fn: Predicate<unknown>, xs: readonly unknown[]) =>
  xs.filter(fn),
) as unknown as {
  <A>(fn: Predicate<A>): (xs: readonly A[]) => A[]
  <A>(fn: Predicate<A>, xs: readonly A[]): A[]
}

export default filter
