import curry from '../Func/curry.js'

/**
 * @remarks
 *
 * ```text
 * filter :: (a -> Boolean) -> [a] -> [a]
 * ```
 *
 * @param arg1 - `(a -> Boolean)`
 * @param arg2 - `[a]`
 *
 * @returns `[a]`
 */
export default curry((fn, xs) => xs.filter(fn))
