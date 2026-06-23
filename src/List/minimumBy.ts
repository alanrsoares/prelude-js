import curry from '../Func/curry.js'
import type { Accessor, CurriedReduceBy } from '../types.js'

/**
 * Returns the item with the smallest value produced by the accessor; curried.
 *
 * @example
 * ```ts
 * minimumBy((s: string) => s.length, ['was', 'a', 'test']) //=> 'a'
 * ```
 */
const minimumBy = curry((fn: Accessor<unknown, number>, xs: readonly unknown[]) =>
  xs.reduceRight((min, x) => (fn(x, 0, xs) < fn(min, 0, xs) ? x : min)),
) as unknown as CurriedReduceBy

export default minimumBy
