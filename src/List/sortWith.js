import curry from '../Func/curry.js'

/**
 * @remarks
 *
 * ```text
 * sortWith :: (a -> Number) -> [a] -> [a]
 * ```
 *
 * @param arg1 - `(a -> Number)`
 * @param arg2 - `[a]`
 *
 * @returns `[a]`
 */
export default curry((fn, xs) => xs.concat().sort(fn))
