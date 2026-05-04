// + get :: String -> {a: b} -> b
import curry from '../Func/curry.js'

export default curry((member, x) => x[member])
