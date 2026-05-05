import curry from '../Func/curry.js'

/**
 * maximunBy :: (a -> b) -> [a] -> b
 *
 * @remarks
 * @param arg1 - `(a -> b)`
 * @param arg2 - `[a]`
 * @returns `b`
 */
export default curry((fn, xs) => xs.reduceRight((max, x) => fn(x) > fn(max) ? x : max))
