import type { Curried } from '../types.d.ts'
import curry from '../Func/curry.js'
import drop from './drop.js'
import take from './take.js'

/**
 * Splits a string into two parts at the given index; curried.
 *
 * @example
 * ```ts
 * splitAt(2, 'hello') //=> ['he', 'llo']
 * ```
 */
const splitAt = curry((index: number, str: string) => [
  take(index, str),
  drop(index, str),
]) as unknown as Curried<[number, string], [string, string]>

export default splitAt
