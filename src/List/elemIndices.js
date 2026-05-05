import curry from '../Func/curry.js'
import findIndices from './findIndices.js'

/**
 * elemIndices :: a -> [a] -> [Number]
 *
 * @remarks
 * @param arg1 - `a`
 * @param arg2 - `[a]`
 * @returns `[Number]`
 */
export default curry((value, xs) => findIndices((x) => x === value, xs))
