import curry from '../Func/curry.js'

/**
 * @remarks
 *
 * ```text
 * slice :: Number -> Number -> String -> String
 * ```
 *
 * @param arg1 - `Number`
 * @param arg2 - `Number`
 * @param arg3 - `String`
 *
 * @returns `String`
 */
export default curry((start, end, str) => str.slice(start, end))
