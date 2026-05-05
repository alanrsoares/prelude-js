/**
 * @remarks
 *
 * ```text
 * concat :: [[a]] -> [a]
 * ```
 *
 * @param arg1 - `[[a]]`
 *
 * @returns `[a]`
 */
export default (xss) => [].concat.apply([], xss)
