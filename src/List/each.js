import curry from '../Func/curry.js'

/**
 * @remarks
 *
 * ```text
 * each :: (a -> b) -> [a] -> void
 * ```
 *
 * @param arg1 - `(a -> b)`
 * @param arg2 - `[a]`
 *
 * @returns `void`
 */
export default curry((fn, xs) => xs.forEach(fn))
