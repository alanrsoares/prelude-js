import curry from '../Func/curry.js'
import dropList from '../List/drop.js'
import type { Curried } from '../types.js'

/**
 * Drops the first `count` characters of a string; curried.
 *
 * @example
 * ```ts
 * drop(2, 'hello') //=> 'llo'
 * ```
 */
const drop = curry((count: number, str: string) =>
  dropList(count, str.split('')).join(''),
) as unknown as Curried<[number, string], string>

export default drop
