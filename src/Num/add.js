import curry from '../Func/curry.js'

/**
 * @remarks
 *
 * ```text
 * add :: Number -> Number -> Number
 * ```
 *
 * @param arg1 - `Number`
 * @param arg2 - `Number`
 *
 * @returns `Number`
 */
export default curry((a, b) => a + b)
