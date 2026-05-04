import curry from '../Func/curry.js'

// + map :: (a -> b) -> [a] -> [b]
export default curry((fn, xs) => xs.map(fn))
