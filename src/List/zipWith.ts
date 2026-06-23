import curry from '../Func/curry.js'

/**
 * Combines two lists element-wise with a function, truncating to the shorter; curried.
 *
 * @example
 * ```ts
 * zipWith((a: number, b: number) => a + b, [1, 2, 3], [3, 2, 1]) //=> [4, 4, 4]
 * ```
 */
const zipWith = curry(
  (f: (left: unknown, right: unknown) => unknown, xs: readonly unknown[], ys: readonly unknown[]) =>
    xs.reduce<unknown[]>((acc, x, i) => (i === ys.length ? acc : acc.concat([f(x, ys[i])])), []),
) as unknown as {
  <A, B, C>(fn: (left: A, right: B) => C): (xs: readonly A[], ys: readonly B[]) => C[]
  <A, B, C>(fn: (left: A, right: B) => C, xs: readonly A[]): (ys: readonly B[]) => C[]
  <A, B, C>(fn: (left: A, right: B) => C, xs: readonly A[], ys: readonly B[]): C[]
}

export default zipWith
