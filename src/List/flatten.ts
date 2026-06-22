import ofType from '../General/ofType.js'
import concatMap from './concatMap.js'

function flattenImpl(ys: readonly unknown[]): unknown[] {
  const cmap = concatMap as unknown as (
    fn: (x: unknown) => unknown,
    xs: readonly unknown[],
  ) => unknown[]
  return cmap((xs) => (ofType('Array', xs) ? flattenImpl(xs as unknown[]) : xs), ys)
}

/**
 * Recursively flattens nested lists into a single list.
 *
 * @example
 * ```ts
 * flatten([1, [[2], 3], [4, [[5]]]]) //=> [1, 2, 3, 4, 5]
 * ```
 */
const flatten = flattenImpl as unknown as <A>(xss: readonly (readonly A[])[]) => A[]

export default flatten
