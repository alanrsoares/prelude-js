import curry from '../Func/curry.js'

/**
 * @remarks
 *
 * ```text
 * at :: Number -> [a] -> a
 * ```
 *
 * @param arg1 - `Number`
 * @param arg2 - `[a]`
 *
 * @returns `a`
 */
export default curry((index, xs) => xs[index])
