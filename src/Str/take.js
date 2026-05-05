import curry from '../Func/curry.js'
import take from '../List/take.js'

/**
 * @remarks
 *
 * ```text
 * take :: Number -> String -> String
 * ```
 */
export default curry((n, x) => x && take(n, x.split('')).join(''))
