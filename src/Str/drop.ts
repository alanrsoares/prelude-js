import type { Curried } from '../types.d.ts'
import dropList from '../List/drop.js'
import curry from '../Func/curry.js'

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
