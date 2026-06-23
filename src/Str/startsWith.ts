import curry from '../Func/curry.js'
import type { Curried } from '../types.js'

/**
 * Returns whether the target string starts with the search string.
 *
 * @example
 * ```ts
 * startsWith('fo', 'foo') //=> true
 * ```
 */
const startsWith = curry(
  (search: string, target: string) => target && target.indexOf(search) === 0,
) as unknown as Curried<[string, string], boolean>

export default startsWith
