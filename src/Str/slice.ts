import curry from '../Func/curry.js'
import type { Curried } from '../types.js'

/**
 * Slices a string between two indices; curried.
 *
 * @example
 * ```ts
 * slice(1, 3, 'hello') //=> 'el'
 * ```
 */
const slice = curry((start: number, end: number, str: string) =>
  str.slice(start, end),
) as unknown as Curried<[number, number, string], string>

export default slice
