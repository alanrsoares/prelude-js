import curry from '../Func/curry.js'

/**
 * @remarks
 *
 * ```text
 * split :: String -> String -> String[]
 * ```
 */
export default curry((sep, str) => str.split(sep))
