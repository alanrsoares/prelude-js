import curry from '../Func/curry.js'

export default curry((fn, xs) => xs.findIndex(fn))
