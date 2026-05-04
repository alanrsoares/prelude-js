// + span :: (String -> Bool) -> String -> [String, String]
import curry from '../Func/curry.js'
import dropWhile from './dropWhile.js'
import takeWhile from './takeWhile.js'

export default curry((fn, str) => [takeWhile(fn, str), dropWhile(fn, str)])
