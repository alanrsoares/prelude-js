import type { Accessor } from '../types.js'
import curry from '../Func/curry.js'

/**
 * Returns the item with the largest value produced by the accessor; curried.
 *
 * @example
 * ```ts
 * maximumBy((s: string) => s.length, ['a', 'ccc', 'bb']) //=> 'ccc'
 * ```
 */
const maximumBy = curry((fn: Accessor<unknown, number>, xs: readonly unknown[]) =>
  xs.reduceRight((max, x) => (fn(x, 0, xs) > fn(max, 0, xs) ? x : max)),
) as unknown as <A, B>(fn: Accessor<A, B>, xs: readonly A[]) => A | undefined

export default maximumBy
