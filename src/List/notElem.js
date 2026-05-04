import curry from '../Func/curry.js'
import elem from './elem.js'

// + notElem :: a -> [a] -> Boolean
export default curry((value, xs) => !elem(value, xs))
