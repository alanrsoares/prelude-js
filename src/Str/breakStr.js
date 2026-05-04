import curry from '../Func/curry.js'
import deny from '../Func/deny.js'
import span from './span.js'

// + breakStr :: (String -> Bool) -> String -> [String, String]
export default curry((fn, str) => span(deny(fn), str))
