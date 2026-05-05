import curry from '../Func/curry.js'

/**
 * @remarks
 *
 * ```text
 * foldl :: (b -> a -> b) -> b -> [a] -> b
 * ```
 */
export default curry((fn, acc, xs) => xs.reduce(fn, acc))
