import type { Predicate } from '../types.d.ts'
import curry from '../Func/curry.js'
import deny from '../Func/deny.js'

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
) as unknown as <A>(fn: Predicate<A>, xs: readonly A[]) => A[]

export default reject
