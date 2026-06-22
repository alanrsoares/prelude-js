import type { Pair } from '../types.d.ts'
import curry from '../Func/curry.js'

/**
 * Zips two lists into a list of pairs, truncating to the shorter; curried.
 *
 * @example
 * ```ts
 * zip([1, 2], [4, 5]) //=> [[1, 4], [2, 5]]
 * ```
 */
const zip = curry((xs: readonly unknown[], ys: readonly unknown[]) =>
  xs.reduce<Pair[]>((acc, x, i) => (i === ys.length ? acc : acc.concat([[x, ys[i]]])), []),
) as unknown as <A, B>(xs: readonly A[], ys: readonly B[]) => Array<Pair<A, B>>

export default zip
