import curry from '../Func/curry.js'
import type { Reducer } from '../types.js'
import head from './head.js'
import scan from './scan.js'
import tail from './tail.js'

/**
 * Like {@link scan} but seeds with the list head; curried.
 *
 * @example
 * ```ts
 * scan1((a: number, b: number) => a + b, [1, 2, 3]) //=> [1, 3, 6]
 * ```
 */
const scan1 = curry((fn: Reducer<unknown, unknown>, xs: readonly unknown[]) =>
  !xs.length ? undefined : scan(fn, head(xs), tail(xs)),
) as unknown as {
  <A>(fn: (acc: A, value: A) => A): (xs: readonly A[]) => A[] | undefined
  <A>(fn: (acc: A, value: A) => A, xs: readonly A[]): A[] | undefined
}

export default scan1
