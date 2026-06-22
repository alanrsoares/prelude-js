/**
 * typeOf :: Any -> String
 *
 * @remarks
 * @param arg1 - `Any`
 * @returns `String`
 */
export default (x) => ({}).toString.call(x).match(/\[object (\w+)\]/)[1]
