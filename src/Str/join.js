import curry from '../Func/curry.js'

/**
 * @remarks
 *
 * ```text
 * join :: String -> String[] -> String
 * ```
 *
 * @param arg1 - `String`
 * @param arg2 - `String[]`
 *
 * @returns `String`
 */
export default curry((separator, xs) => xs.join(separator))
