import type { Accessor } from '../types.js'
import curry from '../Func/curry.js'

/**
 * Counts items grouped by the key the accessor returns; curried.
 *
 * @example
 * ```ts
 * countBy(Math.floor, [4.2, 4.4, 9.8]) //=> { 4: 2, 9: 1 }
 * ```
 */
const countBy = curry((fn: Accessor<unknown, PropertyKey>, xs: readonly unknown[]) =>
  xs.reduce(
    (acc: Record<PropertyKey, number>, x, index, array) => {
      const key = fn(x, index, array)
      acc[key] = acc[key] ? acc[key] + 1 : 1
      return acc
    },
    {} as Record<PropertyKey, number>,
  ),
) as unknown as <A, B>(fn: Accessor<A, B>, xs: readonly A[]) => Record<string, number>

export default countBy
