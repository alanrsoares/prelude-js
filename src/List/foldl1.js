import curry from '../Func/curry.js'
import fold from './fold.js'
import head from './head.js'
import tail from './tail.js'

// + foldl1 :: (a -> a -> a) -> [a] -> a
export default curry((fn, xs) => fold(fn, head(xs), tail(xs)))
