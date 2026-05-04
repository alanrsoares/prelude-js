import curry from '../Func/curry.js'

// + any :: (a -> Boolean) -> [a] -> Boolean
export default curry((fn, xs) => xs.some(fn))
