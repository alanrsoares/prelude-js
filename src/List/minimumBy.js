import curry from '../Func/curry.js'

/**
 * minimumBy :: (a -> b) -> [a] -> b
 *
 * @remarks
 * @param arg1 - `(a -> b)`
 * @param arg2 - `[a]`
 * @returns `b`
 */
export default curry((fn, xs) => xs.reduceRight((min, x) => (fn(x) < fn(min) ? x : min)))
