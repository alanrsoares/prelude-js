import curry from '../Func/curry.js'

/**
 * contains :: String -> String -> Bool
 *
 * @remarks
 * @param arg1 - `String`
 * @param arg2 - `String`
 * @returns `Bool`
 */
export default curry((search, target) => target && target.indexOf(search) > -1)
