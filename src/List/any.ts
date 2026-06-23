import curry from '../Func/curry.js'
import type { CurriedPredicate, Predicate } from '../types.js'

/**
 * Returns true when at least one item satisfies the predicate; curried.
 *
 * @example
 * ```ts
 * any((x: number) => x > 2, [1, 2, 3]) //=> true
 * ```
 */
const any = curry((fn: Predicate<unknown>, xs: readonly unknown[]) =>
  xs.some(fn),
) as unknown as CurriedPredicate<boolean>

export default any
