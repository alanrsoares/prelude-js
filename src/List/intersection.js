import find from './find.js'

/**
 * @remarks
 *
 * ```text
 * intersection :: ([a], [a], ...) -> [a]
 * ```
 *
 * @param arg1 - `([a], [a], ...)`
 *
 * @returns `[a]`
 */
export default (xs, ...yss) => xs.filter((x) => yss.some(find((y) => y === x)))
