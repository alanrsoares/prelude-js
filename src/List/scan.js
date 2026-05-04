import curry from '../Func/curry.js'
import last from '../List/last.js'

// + scan :: (a -> b) -> [a] -> [b]
export default curry((fn, init, xs) => xs.reduce((acc, x) => acc.concat(fn(last(acc), x)), [init]))
