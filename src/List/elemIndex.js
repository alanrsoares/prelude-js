import curry from '../Func/curry.js'
import findIndex from './findIndex.js'

/**
 * @remarks
 *
 * ```text
 * elemIndex :: a -> [a] -> Number
 * ```
 */
export default curry((value, xs) => findIndex((x) => x === value, xs))
