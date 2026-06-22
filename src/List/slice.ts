import curry from '../Func/curry.js'

/**
 * Returns the sublist between `start` and `end`; curried.
 *
 * @example
 * ```ts
 * slice(1, 3, [1, 2, 3, 4]) //=> [2, 3]
 * ```
 */
const slice = curry((x: number, y: number, xs: readonly unknown[]) =>
  xs.slice(x, y),
) as unknown as <A>(start: number, end: number, xs: readonly A[]) => A[]

export default slice
