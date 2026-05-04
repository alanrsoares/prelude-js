// + scanr1 :: (a -> a -> a) -> [a] -> [a]
import curry from '../Func/curry.js'
import scanr from './scanr.js'
import last from './last.js'
import initial from './initial.js'

export default curry((fn, xs) => !xs.length ? undefined : scanr(fn, last(xs), initial(xs)))
