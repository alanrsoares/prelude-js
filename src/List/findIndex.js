import curry from '../Func/curry.js'

/**
 * @remarks
 *
 * ```text
 * findIndex :: (a -> Boolean) -> [a] -> Number
 * ```
 *
 * @param arg1 - `(a -> Boolean)`
 * @param arg2 - `[a]`
 *
 * @returns `Number`
 */
export default curry((fn, xs) => xs.findIndex(fn))
