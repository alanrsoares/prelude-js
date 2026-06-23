import curry from '../Func/curry.js'
import type { CurriedByCount } from '../types.js'

/**
 * Takes the first `n` items from the list; curried.
 *
 * @example
 * ```ts
 * take(2, [1, 2, 3, 4]) //=> [1, 2]
 * ```
 */
const take = curry((n: number, xs: readonly unknown[]) =>
  xs?.filter((_x, i) => i < n),
) as unknown as CurriedByCount

export default take
