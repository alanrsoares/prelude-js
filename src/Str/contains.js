import curry from '../Func/curry.js'

/**
 * @remarks
 *
 * ```text
 * contains :: String -> String -> Bool
 * ```
 *
 * @param arg1 - `String`
 * @param arg2 - `String`
 *
 * @returns `Bool`
 */
export default curry((search, target) => target && target.indexOf(search) > -1)
