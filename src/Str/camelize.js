/**
 * @remarks
 *
 * ```text
 * camelize :: String -> String
 * ```
 *
 * @param arg1 - `String`
 *
 * @returns `String`
 */
export default (x) => x.replace(/-(\w)/g, (m) => m[1].toUpperCase())
