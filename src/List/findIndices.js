// + findIndices :: (a -> Boolean) -> [a] -> [Number]
import curry from '../Func/curry.js'

export default curry((fn, xs) => xs.reduce((indices, x, index) => fn(x, index, xs) ? indices.concat(index) : indices, []))
