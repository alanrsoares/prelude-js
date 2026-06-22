import type { Predicate } from '../types.d.ts'
import deny from '../Func/deny.js'
import any from './any.js'

/**
 * Returns true only when every item satisfies the predicate.
 *
 * @example
 * ```ts
 * all((x: number) => x > 0, [1, 2, 3]) //=> true
 * ```
 */
const all = deny(any) as unknown as <A>(fn: Predicate<A>, xs: readonly A[]) => boolean

export default all
