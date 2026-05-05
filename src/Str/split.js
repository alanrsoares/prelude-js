import curry from '../Func/curry.js'

/**
 * split :: String -> String -> String[]
 *
 * @remarks
 * @param arg1 - `String`
 * @param arg2 - `String`
 * @returns `String[]`
 */
export default curry((sep, str) => str.split(sep))
