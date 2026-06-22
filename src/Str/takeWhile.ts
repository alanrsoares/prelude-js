import type { Curried } from '../types.d.ts'
import takeWhileList from '../List/takeWhile.js'
import curry from '../Func/curry.js'

/**
 * Takes leading characters while the predicate holds; curried.
 *
 * @example
 * ```ts
 * takeWhile((c) => c !== ' ', 'foo bar') //=> 'foo'
 * ```
 */
const takeWhile = curry((fn: (value: string) => unknown, str: string) =>
  str ? takeWhileList(fn, str.split('')).join('') : str,
) as unknown as Curried<[(value: string) => unknown, string], string>

export default takeWhile
