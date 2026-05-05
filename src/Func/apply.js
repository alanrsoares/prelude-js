import curry from './curry.js'

/**
 * @remarks
 *
 * ```text
 * apply :: ([a] -> b?, [a]) -> b?
 * ```
 *
 * @param arg1 - `([a] -> b?, [a])`
 *
 * @returns `b?`
 */
export default curry((fn, args) => fn.apply(null, args))
