import curry from '../Func/curry.js'
import keys from './keys.js'

/**
 * Reduces an object's key/value pairs to a single value; curried.
 * The callback receives `(acc, key, value, index, obj)`.
 *
 * @example
 * ```ts
 * reduce((acc: number, _k: string, v: number) => acc + v, 0, { a: 1, b: 2 }) //=> 3
 * ```
 */
const reduce = curry(
  (
    fn: (
      acc: unknown,
      key: string,
      value: unknown,
      index: number,
      obj: Record<string, unknown>,
    ) => unknown,
    initial: unknown,
    x: Record<string, unknown>,
  ) => keys(x).reduce((acc, k, i) => fn(acc, k, x[k], i, x), initial),
) as unknown as {
  <A, V>(
    fn: (acc: A, key: string, value: V, index: number, obj: Record<string, V>) => A,
  ): (initial: A) => (obj: Record<string, V>) => A
  <A, V>(
    fn: (acc: A, key: string, value: V, index: number, obj: Record<string, V>) => A,
    initial: A,
  ): (obj: Record<string, V>) => A
  <A, V>(
    fn: (acc: A, key: string, value: V, index: number, obj: Record<string, V>) => A,
    initial: A,
    obj: Record<string, V>,
  ): A
}

export default reduce
