import curry from '../Func/curry.js'
import dropWhile from './dropWhile.js'
import takeWhile from './takeWhile.js'

/**
 * span :: (String -> Bool) -> String -> [String, String]
 *
 * @remarks
 * @param arg1 - `(String -> Bool)`
 * @param arg2 - `String`
 * @returns `[String, String]`
 */
export default curry((fn, str) => [takeWhile(fn, str), dropWhile(fn, str)])
