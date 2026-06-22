import type { Mapper } from '../types.d.ts'
import curry from '../Func/curry.js'
import concat from './concat.js'
import map from './map.js'

/**
 * Maps a list to lists and concatenates the results; curried.
 *
 * @example
 * ```ts
 * concatMap((x: number) => [x, x], [1, 2, 3]) //=> [1, 1, 2, 2, 3, 3]
 * ```
 */
const concatMap = curry((fn: Mapper<unknown, readonly unknown[]>, xs: readonly unknown[]) =>
  concat(map(fn, xs)),
) as unknown as <A, B>(fn: Mapper<A, readonly B[]>, xs: readonly A[]) => B[]

export default concatMap
