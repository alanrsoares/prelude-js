import curry from '../Func/curry.js'
import keys from './keys.js'

/**
 * Maps each key/value pair of an object to an array; curried.
 *
 * @example
 * ```ts
 * map((k: string, v: number) => `${k}=${v}`, { a: 1, b: 2 }) //=> ['a=1', 'b=2']
 * ```
 */
const map = curry(
  (fn: (key: string, value: unknown, index: number) => unknown, x: Record<string, unknown>) =>
    keys(x).map((k, i) => fn(k, x[k], i)),
) as unknown as {
  <V, B>(fn: (key: string, value: V, index: number) => B): (obj: Record<string, V>) => B[]
  <V, B>(fn: (key: string, value: V, index: number) => B, obj: Record<string, V>): B[]
}

export default map
