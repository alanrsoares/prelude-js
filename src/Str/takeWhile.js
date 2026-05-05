import curry from '../Func/curry.js'
import takeWhile from '../List/takeWhile.js'

/**
 * @remarks
 *
 * ```text
 * take :: Number -> String -> String
 * ```
 *
 * @param arg1 - `Number`
 * @param arg2 - `String`
 *
 * @returns `String`
 */
export default curry((f, x) => x && takeWhile(f, x.split('')).join(''))
