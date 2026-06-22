/**
 * lines :: String -> String[]
 *
 * @remarks
 * @param arg1 - `String`
 * @returns `String[]`
 */
export default (str) => (str.length ? str.split(/\r?\n/) : [])
