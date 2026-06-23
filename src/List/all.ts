import curry from '../Func/curry.js'
import type { CurriedPredicate, Predicate } from '../types.js'

/**
 * Returns true only when every item satisfies the predicate; curried.
 *
 * @example
 * ```ts
 * all((x: number) => x > 0, [1, 2, 3]) //=> true
 * ```
 */
const all = curry((fn: Predicate<unknown>, xs: readonly unknown[]) =>
  xs.every((x, index, array) => Boolean(fn(x, index, array))),
) as unknown as CurriedPredicate<boolean>

export default all
