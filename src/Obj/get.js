import curry from '../Func/curry.js'

/**
 * @remarks
 *
 * ```text
 * get :: String -> {a: b} -> b
 * ```
 *
 * @param arg1 - `String`
 * @param arg2 - `{a: b}`
 *
 * @returns `b`
 */
export default curry((member, x) => x[member])
