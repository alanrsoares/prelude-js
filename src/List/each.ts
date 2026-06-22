import curry from '../Func/curry.js'

/**
 * Applies a function to each item for its side effect; curried.
 *
 * @example
 * ```ts
 * each((x: number) => console.log(x), [1, 2, 3]) //=> undefined
 * ```
 */
const each = curry(
  (
    fn: (value: unknown, index: number, array: readonly unknown[]) => unknown,
    xs: readonly unknown[],
  ) => xs.forEach(fn),
) as unknown as <A>(
  fn: (value: A, index: number, array: readonly A[]) => unknown,
  xs: readonly A[],
) => void

export default each
