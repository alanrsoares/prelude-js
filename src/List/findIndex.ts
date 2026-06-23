import curry from '../Func/curry.js'
import type { CurriedPredicate, Predicate } from '../types.js'

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
) as unknown as CurriedPredicate<number>

export default findIndex
