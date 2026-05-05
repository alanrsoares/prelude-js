import curry from '../Func/curry.js'
import drop from './drop.js'
import take from './take.js'

/**
 * @remarks
 *
 * ```text
 * splitAt :: Number -> String -> [String, String]
 * ```
 *
 * @param arg1 - `Number`
 * @param arg2 - `String`
 *
 * @returns `[String, String]`
 */
export default curry((index, str) => [take(index, str), drop(index, str)])
