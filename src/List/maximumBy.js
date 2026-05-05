import curry from '../Func/curry.js'

/**
 * @remarks
 *
 * ```text
 * maximunBy :: (a -> b) -> [a] -> b
 * ```
 *
 * @param arg1 - `(a -> b)`
 * @param arg2 - `[a]`
 *
 * @returns `b`
 */
export default curry((fn, xs) => xs.reduceRight((max, x) => fn(x) > fn(max) ? x : max))
