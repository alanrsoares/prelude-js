import curry from '../Func/curry.js'
import dropWhile from './dropWhile.js'
import takeWhile from './takeWhile.js'

/**
 * @remarks
 *
 * ```text
 * span :: (String -> Bool) -> String -> [String, String]
 * ```
 */
export default curry((fn, str) => [takeWhile(fn, str), dropWhile(fn, str)])
