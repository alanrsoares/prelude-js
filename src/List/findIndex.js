import curry from '../Func/curry.js'

/**
 * `findIndex :: (a -> Boolean) -> [a] -> Number`
 */
export default curry((fn, xs) => xs.findIndex(fn))
