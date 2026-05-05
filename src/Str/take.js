import curry from '../Func/curry.js'
import take from '../List/take.js'

/**
 * take :: Number -> String -> String
 *
 * @remarks
 * @param arg1 - `Number`
 * @param arg2 - `String`
 * @returns `String`
 */
export default curry((n, x) => x && take(n, x.split('')).join(''))
