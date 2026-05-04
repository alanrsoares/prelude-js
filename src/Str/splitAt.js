// + splitAt :: Number -> String -> [String, String]
import curry from '../Func/curry.js'
import drop from './drop.js'
import take from './take.js'

export default curry((index, str) => [take(index, str), drop(index, str)])
