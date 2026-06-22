import type { Accessor } from '../types.d.ts'
import curry from '../Func/curry.js'

/**
 * Returns a new list sorted by the value the accessor returns; curried.
 *
 * @example
 * ```ts
 * sortBy((s: string) => s.length, ['three', 'one', 'two']) //=> ['one', 'two', 'three']
 * ```
 */
const sortBy = curry((fn: Accessor<unknown, number>, xs: readonly unknown[]) =>
  xs
    .concat()
    .sort((x, y) => (fn(x, 0, xs) > fn(y, 0, xs) ? 1 : fn(x, 0, xs) < fn(y, 0, xs) ? -1 : 0)),
) as unknown as <A, B>(fn: Accessor<A, B>, xs: readonly A[]) => A[]

export default sortBy
