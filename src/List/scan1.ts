import type { Reducer } from '../types.d.ts'
import curry from '../Func/curry.js'
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
) as unknown as <A, B>(fn: Reducer<A, B>, initial: A, xs: readonly B[]) => A[]

export default scan1
