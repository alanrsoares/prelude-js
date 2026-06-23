import curry from '../Func/curry.js'
import type { Curried } from '../types.js'
import dropWhile from './dropWhile.js'
import takeWhile from './takeWhile.js'

/**
 * Splits a string into the longest prefix matching the predicate and the rest; curried.
 *
 * @example
 * ```ts
 * span((c) => c !== ' ', 'foo bar') //=> ['foo', ' bar']
 * ```
 */
const span = curry((fn: (value: string) => unknown, str: string) => [
  takeWhile(fn, str),
  dropWhile(fn, str),
]) as unknown as Curried<[(value: string) => unknown, string], [string, string]>

export default span
