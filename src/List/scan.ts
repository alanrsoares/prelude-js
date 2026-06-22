import type { Reducer } from '../types.d.ts'
import curry from '../Func/curry.js'
import last from './last.js'

/**
 * Like {@link reduce} but returns the list of successive accumulator values; curried.
 *
 * @example
 * ```ts
 * scan((a: number, b: number) => a + b, 0, [1, 2, 3]) //=> [0, 1, 3, 6]
 * ```
 */
const scan = curry((fn: Reducer<unknown, unknown>, init: unknown, xs: readonly unknown[]) =>
  xs.reduce<unknown[]>(
    (acc, x, index, array) => acc.concat(fn(last(acc), x, index, array)),
    [init],
  ),
) as unknown as <A, B>(fn: Reducer<A, B>, initial: A, xs: readonly B[]) => A[]

export default scan
