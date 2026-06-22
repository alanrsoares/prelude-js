import type { Pair } from '../types.js'
import zipAllWith from './zipAllWith.js'

/**
 * Zips two lists into pairs, padding the shorter list with undefined.
 *
 * @example
 * ```ts
 * zipAll([1, 2], [4]) //=> [[1, 4], [2, undefined]]
 * ```
 */
const zipAll = (<A, B>(xs: readonly A[], ys: readonly B[]) =>
  zipAllWith((x: A | undefined, y: B | undefined) => [x, y], xs, ys)) as unknown as <A, B>(
  xs: readonly A[],
  ys: readonly B[],
) => Array<Pair<A | undefined, B | undefined>>

export default zipAll
