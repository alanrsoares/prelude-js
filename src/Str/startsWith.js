import curry from '../Func/curry.js'

/**
 * @remarks
 *
 * ```text
 * startsWith :: String -> String -> Bool
 * ```
 */
export default curry((search, target) => target && target.indexOf(search) === 0)
