import type { Curried } from '../types.js'
import takeList from '../List/take.js'
import curry from '../Func/curry.js'

/**
 * Takes the first `count` characters of a string; curried.
 *
 * @example
 * ```ts
 * take(2, 'hello') //=> 'he'
 * ```
 */
const take = curry((count: number, str: string) =>
  str ? takeList(count, str.split('')).join('') : str,
) as unknown as Curried<[number, string], string>

export default take
