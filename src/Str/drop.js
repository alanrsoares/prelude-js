// + drop :: Number -> String -> String
import curry from '../Func/curry.js'
import drop from '../List/drop.js'

export default curry((count, str) => drop(count, str.split('')).join(''))
