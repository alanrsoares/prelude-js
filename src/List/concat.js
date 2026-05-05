/**
 * concat :: [[a]] -> [a]
 *
 * @remarks
 * @param arg1 - `[[a]]`
 * @returns `[a]`
 */
export default (xss) => [].concat.apply([], xss)
