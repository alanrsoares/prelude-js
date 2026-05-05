import curry from '../Func/curry.js'

/**
 * `sortWith :: (a -> Number) -> [a] -> [a]`
 */
export default curry((fn, xs) => xs.concat().sort(fn))
