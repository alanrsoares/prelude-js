import curry from '../Func/curry.js'
import type { CurriedPredicate, Predicate } from '../types.js'

/**
 * Returns the indices of all items that satisfy the predicate; curried.
 *
 * @example
 * ```ts
 * findIndices((x: number) => x > 1, [1, 2, 3]) //=> [1, 2]
 * ```
 */
const findIndices = curry((fn: Predicate<unknown>, xs: readonly unknown[]) =>
  xs.reduce<number[]>(
    (indices, x, index) => (fn(x, index, xs) ? indices.concat(index) : indices),
    [],
  ),
) as unknown as CurriedPredicate<number[]>

export default findIndices
