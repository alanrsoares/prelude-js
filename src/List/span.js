import curry from '../Func/curry.js'
import dropWhile from './dropWhile.js'
import takeWhile from './takeWhile.js'

/**
 * span :: (a -> Bool) -> [a] -> [[a], [a]]
 *
 * @remarks
 * @param arg1 - `(a -> Bool)`
 * @param arg2 - `[a]`
 * @returns `[[a], [a]]`
 */
export default curry((f, xs) => [takeWhile(f, xs), dropWhile(f, xs)])
