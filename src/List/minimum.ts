import id from '../General/id.js'
import minimumBy from './minimumBy.js'

/**
 * Returns the smallest item in the list, or undefined when empty.
 *
 * @example
 * ```ts
 * minimum([3, 1, 2]) //=> 1
 * ```
 */
const minimum = (<A>(xs: readonly A[]): A | undefined => minimumBy(id, xs)) as unknown as <A>(
  xs: readonly A[],
) => A | undefined

export default minimum
