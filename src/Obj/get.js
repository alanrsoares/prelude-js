import curry from '../Func/curry.js'

/**
 * `get :: String -> {a: b} -> b`
 */
export default curry((member, x) => x[member])
