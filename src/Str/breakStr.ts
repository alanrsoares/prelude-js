import type { Curried } from '../types.d.ts'
import curry from '../Func/curry.js'
import deny from '../Func/deny.js'
import span from './span.js'

/**
 * Splits a string at the first character matching the predicate; curried.
 *
 * @example
 * ```ts
 * breakStr((c) => c === ' ', 'foo bar') //=> ['foo', ' bar']
 * ```
 */
const breakStr = curry((fn: (value: string) => unknown, str: string) =>
  span(deny(fn), str),
) as unknown as Curried<[(value: string) => unknown, string], [string, string]>

export default breakStr
