import curry from '../Func/curry.js'

/**
 * @remarks
 *
 * ```text
 * join :: String -> String[] -> String
 * ```
 */
export default curry((separator, xs) => xs.join(separator))
