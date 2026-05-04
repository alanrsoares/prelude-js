import curry from '../Func/curry.js'
import findIndex from './findIndex.js'

export default curry((value, xs) => findIndex((x) => x === value, xs))
