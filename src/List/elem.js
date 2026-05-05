import curry from '../Func/curry.js'

/**
 * @remarks
 *
 * ```text
 * elem :: a -> [a] -> Boolean
 * ```
 *
 * @param arg1 - `a`
 * @param arg2 - `[a]`
 *
 * @returns `Boolean`
 */
export default curry((value, xs) => xs.includes(value))
