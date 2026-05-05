import curry from '../Func/curry.js'

/**
 * @remarks
 *
 * ```text
 * findIndex :: (a -> Boolean) -> [a] -> Number
 * ```
 */
export default curry((fn, xs) => xs.findIndex(fn))
