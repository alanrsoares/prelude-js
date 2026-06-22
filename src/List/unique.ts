import id from '../General/id.js'
import uniqueBy from './uniqueBy.js'

/**
 * Returns the list with duplicate items removed.
 *
 * @example
 * ```ts
 * unique([1, 2, 2, 3, 1]) //=> [1, 2, 3]
 * ```
 */
const unique = (<A>(xs: readonly A[]): A[] => uniqueBy(id, xs) as A[]) as unknown as <A>(
  xs: readonly A[],
) => A[]

export default unique
