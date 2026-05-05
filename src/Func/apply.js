import curry from './curry.js'

/**
 * apply :: ([a] -> b?, [a]) -> b?
 *
 * @remarks
 * @param arg1 - `([a] -> b?, [a])`
 * @returns `b?`
 */
export default curry((fn, args) => fn.apply(null, args))
