import type { Reducer } from '../types.d.ts'
import curry from '../Func/curry.js'

/**
 * Left-reduces a list with an initial accumulator; curried.
 *
 * @example
 * ```ts
 * reduce((acc: number, x: number) => acc + x, 0, [1, 2, 3]) //=> 6
 * ```
 */
const reduce = curry((fn: Reducer<unknown, unknown>, initial: unknown, xs: readonly unknown[]) =>
  xs.reduce(fn, initial),
) as unknown as {
  <A, B>(fn: Reducer<A, B>): (initial: A) => (xs: readonly B[]) => A
  <A, B>(fn: Reducer<A, B>, initial: A): (xs: readonly B[]) => A
  <A, B>(fn: Reducer<A, B>, initial: A, xs: readonly B[]): A
}

export default reduce
