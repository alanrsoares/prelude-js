import type { Curried } from '../types.d.ts'
import dropWhileList from '../List/dropWhile.js'
import curry from '../Func/curry.js'

/**
 * Drops leading characters while the predicate holds; curried.
 *
 * @example
 * ```ts
 * dropWhile((c) => c === ' ', '  hi') //=> 'hi'
 * ```
 */
const dropWhile = curry((fn: (value: string) => unknown, str: string) =>
  dropWhileList(fn, str.split('')).join(''),
) as unknown as Curried<[(value: string) => unknown, string], string>

export default dropWhile
