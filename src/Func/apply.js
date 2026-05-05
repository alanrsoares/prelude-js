import curry from './curry.js'

/**
 * `apply :: ([a] -> b?, [a]) -> b?`
 */
export default curry((fn, args) => fn.apply(null, args))
