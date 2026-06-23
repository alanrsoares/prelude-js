import curry from '../Func/curry.js'
import type { CurriedByCount } from '../types.js'

/**
 * Drops the first `n` items from the list; curried.
 *
 * @example
 * ```ts
 * drop(2, [1, 2, 3, 4]) //=> [3, 4]
 * ```
 */
const drop = curry((n: number, xs: readonly unknown[]) =>
  xs?.filter((_x, i) => i >= n),
) as unknown as CurriedByCount

export default drop
