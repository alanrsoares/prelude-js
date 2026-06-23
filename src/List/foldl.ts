import curry from '../Func/curry.js'
import type { Reducer } from '../types.js'

/**
 * Left-associative fold over a list with an initial accumulator; curried.
 *
 * @example
 * ```ts
 * foldl((acc: number, x: number) => acc + x, 0, [1, 2, 3]) //=> 6
 * ```
 */
const foldl = curry((fn: Reducer<unknown, unknown>, acc: unknown, xs: readonly unknown[]) =>
  xs.reduce(fn, acc),
) as unknown as {
  <A, B>(fn: Reducer<A, B>): (initial: A) => (xs: readonly B[]) => A
  <A, B>(fn: Reducer<A, B>, initial: A): (xs: readonly B[]) => A
  <A, B>(fn: Reducer<A, B>, initial: A, xs: readonly B[]): A
}

export default foldl
