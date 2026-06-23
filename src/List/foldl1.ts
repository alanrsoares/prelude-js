import curry from '../Func/curry.js'
import fold from './fold.js'
import head from './head.js'
import tail from './tail.js'

/**
 * Left fold over a non-empty list using its head as the seed; curried.
 *
 * @example
 * ```ts
 * foldl1((acc: number, x: number) => acc + x, [1, 2, 3]) //=> 6
 * ```
 */
const foldl1 = curry((fn: (acc: unknown, value: unknown) => unknown, xs: readonly unknown[]) =>
  fold(fn, head(xs), tail(xs)),
) as unknown as {
  <A>(fn: (acc: A, value: A) => A): (xs: readonly A[]) => A
  <A>(fn: (acc: A, value: A) => A, xs: readonly A[]): A
}

export default foldl1
