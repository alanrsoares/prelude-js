/**
 * dasherize :: String -> String
 *
 * @remarks
 * @param arg1 - `String`
 * @returns `String`
 */
export default (x) => x.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`)
