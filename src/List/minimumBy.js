import curry from '../Func/curry.js'

/**
 * @remarks
 *
 * ```text
 * minimumBy :: (a -> b) -> [a] -> b
 * ```
 */
export default curry((fn, xs) => xs.reduceRight((min, x) => fn(x) < fn(min) ? x : min))
