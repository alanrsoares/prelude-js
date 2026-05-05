/**
 * @remarks
 *
 * ```text
 * capitalize :: String -> string
 * ```
 *
 * @param arg1 - `String`
 *
 * @returns `string`
 */
export default (x) => x.charAt(0).toUpperCase() + x.slice(1)
