import curry from '../Func/curry.js'

/**
 * @remarks
 *
 * ```text
 * split :: String -> String -> String[]
 * ```
 *
 * @param arg1 - `String`
 * @param arg2 - `String`
 *
 * @returns `String[]`
 */
export default curry((sep, str) => str.split(sep))
