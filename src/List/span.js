import curry from '../Func/curry.js'
import takeWhile from './takeWhile.js'
import dropWhile from './dropWhile.js'

/**
 * `span :: (a -> Bool) -> [a] -> [[a], [a]]`
 */
export default curry((f, xs) => [takeWhile(f, xs), dropWhile(f, xs)])
