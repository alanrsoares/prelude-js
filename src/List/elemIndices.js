// + elemIndices :: a -> [a] -> [Number]
import curry from '../Func/curry.js'
import findIndices from './findIndices.js'

export default curry((value, xs) => findIndices((x) => x === value, xs))
