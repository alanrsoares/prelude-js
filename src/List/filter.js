import curry from '../Func/curry.js'

/**
 * @remarks
 *
 * ```text
 * filter :: (a -> Boolean) -> [a] -> [a]
 * ```
 */
export default curry((fn, xs) => xs.filter(fn))
