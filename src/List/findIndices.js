import curry from '../Func/curry.js'

/**
 * @remarks
 *
 * ```text
 * findIndices :: (a -> Boolean) -> [a] -> [Number]
 * ```
 *
 * @param arg1 - `(a -> Boolean)`
 * @param arg2 - `[a]`
 *
 * @returns `[Number]`
 */
export default curry((fn, xs) => xs.reduce((indices, x, index) => fn(x, index, xs) ? indices.concat(index) : indices, []))
