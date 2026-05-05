import curry from '../Func/curry.js'

/**
 * @remarks
 *
 * ```text
 * slice :: Number -> Number -> [a] -> [a]
 * ```
 *
 * @param arg1 - `Number`
 * @param arg2 - `Number`
 * @param arg3 - `[a]`
 *
 * @returns `[a]`
 */
export default curry((x, y, xs) => xs.slice(x, y))
