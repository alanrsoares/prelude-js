import type { Predicate } from '../types.d.ts'
import curry from '../Func/curry.js'

/**
 * Groups items into lists keyed by the value the function returns; curried.
 *
 * @example
 * ```ts
 * groupBy(Math.floor, [4.2, 4.4, 9.8]) //=> { 4: [4.2, 4.4], 9: [9.8] }
 * ```
 */
const groupBy = curry((fn: (x: unknown) => PropertyKey, xs: readonly unknown[]) =>
  xs.reduce(
    (acc: Record<PropertyKey, unknown[]>, x) => {
      const key = fn(x)
      acc[key] = acc[key] ? acc[key].concat([x]) : [x]
      return acc
    },
    {} as Record<PropertyKey, unknown[]>,
  ),
) as unknown as <A>(fn: Predicate<A>, xs: readonly A[]) => A[][]

export default groupBy
