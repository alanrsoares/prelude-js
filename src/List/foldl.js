import curry from '../Func/curry.js'

/**
 * @remarks
 *
 * ```text
 * foldl :: (b -> a -> b) -> b -> [a] -> b
 * ```
 *
 * @param arg1 - `(b -> a -> b)`
 * @param arg2 - `b`
 * @param arg3 - `[a]`
 *
 * @returns `b`
 */
export default curry((fn, acc, xs) => xs.reduce(fn, acc))
