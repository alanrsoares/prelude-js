import curry from '../Func/curry.js'
import reverse from './reverse.js'
import scan from './scan.js'

/**
 * Right scan over a list with an initial accumulator; curried.
 *
 * @example
 * ```ts
 * scanr((a: number, b: number) => a + b, 0, [1, 2, 3]) //=> [6, 5, 3, 0]
 * ```
 */
const scanr = curry(
  (fn: (value: unknown, acc: unknown) => unknown, init: unknown, xs: readonly unknown[]) =>
    reverse(scan(fn, init, reverse(xs))),
) as unknown as <A, B>(
  fn: (value: B, acc: A, index: number, array: readonly B[]) => A,
  initial: A,
  xs: readonly B[],
) => A[]

export default scanr
