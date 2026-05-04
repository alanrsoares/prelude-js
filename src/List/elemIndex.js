import curry from '../Func/curry.js'
import findIndex from './findIndex.js'

// + elemIndex :: a -> [a] -> Number
export default curry((value, xs) => findIndex((x) => x === value, xs))
