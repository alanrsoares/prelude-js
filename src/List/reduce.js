import curry from '../Func/curry.js'

/**
 * @remarks
 *
 * ```text
 * reduce :: ((a, b) -> a) -> [b] -> a
 * ```
 *
 * @param arg1 - `((a, b) -> a)`
 * @param arg2 - `[b]`
 *
 * @returns `a`
 */
export default curry((fn, initial, xs) => xs.reduce(fn, initial))
