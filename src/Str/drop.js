import curry from '../Func/curry.js'
import drop from '../List/drop.js'

/**
 * @remarks
 *
 * ```text
 * drop :: Number -> String -> String
 * ```
 */
export default curry((count, str) => drop(count, str.split('')).join(''))
