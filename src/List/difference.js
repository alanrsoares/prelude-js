import find from './find.js'

/**
 * difference :: ([a], [a], ...) -> [a]
 *
 * @remarks
 * @param arg1 - `([a], [a], ...)`
 * @returns `[a]`
 */
export default (xs, ...yss) => xs.filter((x) => !yss.some(find((y) => y === x)))
