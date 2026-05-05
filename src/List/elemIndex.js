import curry from '../Func/curry.js'
import findIndex from './findIndex.js'

/**
 * elemIndex :: a -> [a] -> Number
 *
 * @remarks
 * @param arg1 - `a`
 * @param arg2 - `[a]`
 * @returns `Number`
 */
export default curry((value, xs) => findIndex((x) => x === value, xs))
