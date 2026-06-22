import id from '../General/id.js'
import maximumBy from './maximumBy.js'

/**
 * Returns the largest item in the list, or undefined when empty.
 *
 * @example
 * ```ts
 * maximum([1, 2, 3, 4, 5]) //=> 5
 * ```
 */
const maximum = (<A>(xs: readonly A[]): A | undefined => maximumBy(id, xs)) as unknown as <A>(
  xs: readonly A[],
) => A | undefined

export default maximum
