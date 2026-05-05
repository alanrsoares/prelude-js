/**
 * @remarks
 *
 * ```text
 * clone :: a -> a'
 * ```
 *
 * @param arg1 - `a`
 *
 * @returns `a'`
 */
export default (x) => JSON.parse(JSON.stringify(x))
