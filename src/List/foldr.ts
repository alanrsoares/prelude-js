import curry from '../Func/curry.js'

/**
 * Right-associative fold over a list with an initial accumulator; curried.
 *
 * @example
 * ```ts
 * foldr((x: string, acc: string) => x + acc, 'o', ['h', 'e', 'l', 'l']) //=> 'hello'
 * ```
 */
const foldr = curry(
  (
    fn: (value: unknown, acc: unknown, index: number, array: readonly unknown[]) => unknown,
    acc: unknown,
    xs: readonly unknown[],
  ) => {
    for (let i = xs.length - 1; i >= 0; i--) {
      acc = fn(xs[i], acc, i, xs)
    }
    return acc
  },
) as unknown as {
  <A, B>(
    fn: (value: B, acc: A, index: number, array: readonly B[]) => A,
  ): (initial: A) => (xs: readonly B[]) => A
  <A, B>(
    fn: (value: B, acc: A, index: number, array: readonly B[]) => A,
    initial: A,
  ): (xs: readonly B[]) => A
  <A, B>(
    fn: (value: B, acc: A, index: number, array: readonly B[]) => A,
    initial: A,
    xs: readonly B[],
  ): A
}

export default foldr
