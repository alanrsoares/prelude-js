import curry from '../Func/curry.js'
import initial from './initial.js'
import last from './last.js'
import scanr from './scanr.js'

/**
 * Right scan over a list seeded with its last item; curried.
 *
 * @example
 * ```ts
 * scanr1((a: number, b: number) => a + b, [1, 2, 3]) //=> [6, 5, 3]
 * ```
 */
const scanr1 = curry((fn: (value: unknown, acc: unknown) => unknown, xs: readonly unknown[]) =>
  !xs.length ? undefined : scanr(fn, last(xs), initial(xs)),
) as unknown as <A, B>(
  fn: (value: B, acc: A, index: number, array: readonly B[]) => A,
  initial: A,
  xs: readonly B[],
) => A[]

export default scanr1
