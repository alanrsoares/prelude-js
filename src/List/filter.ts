import curry from '../Func/curry.js'
import type { CurriedListFilter, Predicate } from '../types.js'

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
) as unknown as CurriedListFilter

export default filter
