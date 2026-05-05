import curry from '../Func/curry.js'

/**
 * @remarks
 *
 * ```text
 * any :: (a -> Boolean) -> [a] -> Boolean
 * ```
 */
export default curry((fn, xs) => xs.some(fn))
