import curry from '../Func/curry.js'

/**
 * @remarks
 *
 * ```text
 * map :: (a -> b) -> [a] -> [b]
 * ```
 *
 * @param arg1 - `(a -> b)`
 * @param arg2 - `[a]`
 *
 * @returns `[b]`
 */
export default curry((fn, xs) => xs.map(fn))
