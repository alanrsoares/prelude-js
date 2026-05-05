import curry from '../Func/curry.js'

/**
 * @remarks
 *
 * ```text
 * elem :: a -> [a] -> Boolean
 * ```
 */
export default curry((value, xs) => xs.includes(value))
