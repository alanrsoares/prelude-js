import curry from '../Func/curry.js'
import dropWhile from '../List/dropWhile.js'

/**
 * @remarks
 *
 * ```text
 * dropWhile :: (String -> Bool) -> String -> String
 * ```
 *
 * @param arg1 - `(String -> Bool)`
 * @param arg2 - `String`
 *
 * @returns `String`
 */
export default curry((fn, str) => dropWhile(fn, str.split('')).join(''))
