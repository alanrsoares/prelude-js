import type { Curried } from '../types.js'
import curry from '../Func/curry.js'

/**
 * Left-pads a value using the supplied padding string; curried.
 *
 * @example
 * ```ts
 * padLeft('   ', '42') //=> ' 42'
 * ```
 */
const padLeft = curry((p: string, s: string) => {
  const padding = p || ''
  const value = s || ''
  return padding.substring(0, padding.length - value.toString().length) + value
}) as unknown as Curried<[string, string], string>

export default padLeft
