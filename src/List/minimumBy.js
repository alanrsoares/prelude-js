import curry from '../Func/curry.js'

/**
 * @remarks
 *
 * ```text
 * minimumBy :: (a -> b) -> [a] -> b
 * ```
 *
 * @param arg1 - `(a -> b)`
 * @param arg2 - `[a]`
 *
 * @returns `b`
 */
export default curry((fn, xs) => xs.reduceRight((min, x) => fn(x) < fn(min) ? x : min))
