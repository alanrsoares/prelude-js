import curry from '../Func/curry.js'

/**
 * `each :: (a -> b) -> [a] -> void`
 */
export default curry((fn, xs) => xs.forEach(fn))
