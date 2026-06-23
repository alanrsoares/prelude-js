import curry from '../Func/curry.js'
import deny from '../Func/deny.js'
import type { CurriedListFilter, Predicate } from '../types.js'

/**
 * Keeps the items that do not satisfy the predicate; curried.
 *
 * @example
 * ```ts
 * reject((x: number) => x > 2, [1, 2, 3, 4]) //=> [1, 2]
 * ```
 */
const reject = curry((fn: Predicate<unknown>, xs: readonly unknown[]) =>
  xs.filter(deny(fn)),
) as unknown as CurriedListFilter

export default reject
