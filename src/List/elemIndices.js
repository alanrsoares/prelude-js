import curry from '../Func/curry.js'
import findIndices from './findIndices.js'

/**
 * @remarks
 *
 * ```text
 * elemIndices :: a -> [a] -> [Number]
 * ```
 */
export default curry((value, xs) => findIndices((x) => x === value, xs))
