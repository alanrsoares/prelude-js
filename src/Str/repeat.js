import curry from '../Func/curry.js'

export default curry((count, str) => (str || '').repeat(count))
