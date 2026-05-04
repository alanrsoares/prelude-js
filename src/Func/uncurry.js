import curry from './curry.js'

// + uncurry :: (a -> b -> c) -> [a, b] -> c
export default curry((fn, args) => fn(...args))
