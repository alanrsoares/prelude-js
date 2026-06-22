import filter from './filter.js'
import id from '../General/id.js'

/**
 * Removes falsy values from the list.
 *
 * @example
 * ```ts
 * compact([0, 1, false, 2]) //=> [1, 2]
 * ```
 */
const compact = filter(id) as unknown as <A>(xs: readonly A[]) => A[]

export default compact
