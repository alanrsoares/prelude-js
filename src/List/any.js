import curry from '../Func/curry.js'

/**
 * @remarks
 *
 * ```text
 * any :: (a -> Boolean) -> [a] -> Boolean
 * ```
 *
 * @param arg1 - `(a -> Boolean)`
 * @param arg2 - `[a]`
 *
 * @returns `Boolean`
 */
export default curry((fn, xs) => xs.some(fn))
