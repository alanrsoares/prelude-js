import curry from '../Func/curry.js'

/**
 * get :: String -> {a: b} -> b
 *
 * @remarks
 * @param arg1 - `String`
 * @param arg2 - `{a: b}`
 * @returns `b`
 */
export default curry((member, x) => x[member])
