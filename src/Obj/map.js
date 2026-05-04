import curry from '../Func/curry.js'
import keys from './keys.js'

// + map :: ((a, b) -> c) -> {a: b} -> [c]
export default curry((fn, x) => keys(x).map((k, i) => fn(k, x[k], i)))
