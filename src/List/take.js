import curry from '../Func/curry.js'

/**
 * @remarks
 *
 * ```text
 * take :: Number -> [a] -> [a]
 * ```
 *
 * @param arg1 - `Number`
 * @param arg2 - `[a]`
 *
 * @returns `[a]`
 */
export default curry((n, xs) => xs && xs.filter((x, i) => i < n))
