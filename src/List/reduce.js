import curry from '../Func/curry.js'

/**
 * reduce :: ((a, b) -> a) -> [b] -> a
 *
 * @remarks
 * @param arg1 - `((a, b) -> a)`
 * @param arg2 - `[b]`
 * @returns `a`
 */
export default curry((fn, initial, xs) => xs.reduce(fn, initial))
