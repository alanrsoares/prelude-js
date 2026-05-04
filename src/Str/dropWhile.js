// + dropWhile :: (String -> Bool) -> String -> String
import curry from '../Func/curry.js'
import dropWhile from '../List/dropWhile.js'

export default curry((fn, str) => dropWhile(fn, str.split('')).join(''))
