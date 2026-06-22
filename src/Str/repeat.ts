import type { Curried } from '../types.d.ts'
import curry from '../Func/curry.js'

/**
 * Repeats a string `count` times; curried.
 *
 * @example
 * ```ts
 * repeat(3, 'ab') //=> 'ababab'
 * ```
 */
const repeat = curry((count: number, str: string) =>
  (str || '').repeat(count),
) as unknown as Curried<[number, string], string>

export default repeat
