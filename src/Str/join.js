import curry from '../Func/curry.js'

/**
 * join :: String -> String[] -> String
 *
 * @remarks
 * @param arg1 - `String`
 * @param arg2 - `String[]`
 * @returns `String`
 */
export default curry((separator, xs) => xs.join(separator))
