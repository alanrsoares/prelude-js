import curry from '../Func/curry.js'
import scan from '../List/scan.js'
import reverse from '../List/reverse.js'

// + scanr :: (a → b → b) → b → [a] → [b]
export default curry((fn, init, xs) => reverse(scan(fn, init, reverse(xs))))
