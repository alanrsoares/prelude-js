import type { Curried } from '../types.js'
import curry from '../Func/curry.js'

/**
 * Returns whether the target string contains the search string.
 *
 * @example
 * ```ts
 * contains('oo', 'foo') //=> true
 * ```
 */
const contains = curry(
  (search: string, target: string) => target && target.indexOf(search) > -1,
) as unknown as Curried<[string, string], boolean>

export default contains
