import unique from './unique.js'
import flatten from './flatten.js'

/**
 * union :: ([a], [a], ...) -> [a]
 *
 * @remarks
 * @param arg1 - `([a], [a], ...)`
 * @returns `[a]`
 */
export default (xs, ...yss) => unique(xs.concat(flatten(yss)))
