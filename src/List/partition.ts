import type { Predicate } from '../types.js'
import curry from '../Func/curry.js'

/**
 * Splits a list into items that pass and fail the predicate; curried.
 *
 * @example
 * ```ts
 * partition((x: number) => x > 2, [1, 2, 3, 4]) //=> [[3, 4], [1, 2]]
 * ```
 */
const partition = curry((fn: Predicate<unknown>, xs: readonly unknown[]) => {
  const passed: unknown[] = []
  const failed: unknown[] = []
  xs.forEach((x, index, array) => {
    const bucket = fn(x, index, array) ? passed : failed
    bucket.push(x)
  })
  return [passed, failed]
}) as unknown as <A>(fn: Predicate<A>, xs: readonly A[]) => [A[], A[]]

export default partition
