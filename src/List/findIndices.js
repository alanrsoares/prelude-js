import curry from '../Func/curry.js'

/**
 * @remarks
 *
 * ```text
 * findIndices :: (a -> Boolean) -> [a] -> [Number]
 * ```
 */
export default curry((fn, xs) => xs.reduce((indices, x, index) => fn(x, index, xs) ? indices.concat(index) : indices, []))
