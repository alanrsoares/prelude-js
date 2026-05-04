import curry from '../Func/curry.js'

// + elem :: a -> [a] -> Boolean
export default curry((value, xs) => xs.includes(value))
