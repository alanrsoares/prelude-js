import curry from '../Func/curry.js'

/**
 * Combines two lists with a function, padding the shorter with undefined; curried.
 *
 * @example
 * ```ts
 * zipAllWith((a, b) => [a, b], [1], [4, 5]) //=> [[1, 4], [undefined, 5]]
 * ```
 */
const zipAllWith = curry(
  (
    fn: (left: unknown, right: unknown) => unknown,
    xs: readonly unknown[],
    ys: readonly unknown[],
  ) => {
    const length = Math.max(xs.length, ys.length)
    return Array.from({ length }, (_, index) => fn(xs[index], ys[index]))
  },
) as unknown as <A, B, C>(
  fn: (left: A | undefined, right: B | undefined) => C,
  xs: readonly A[],
  ys: readonly B[],
) => C[]

export default zipAllWith
