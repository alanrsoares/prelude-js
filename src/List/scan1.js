// + scan1 :: (a -> a -> a) -> [a] -> [a]
import curry from '../Func/curry.js'
import scan from './scan.js'
import head from './head.js'
import tail from './tail.js'

export default curry((fn, xs) => !xs.length ? undefined : scan(fn, head(xs), tail(xs)))
