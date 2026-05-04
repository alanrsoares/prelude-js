import curry from '../Func/curry.js'

// + repeat :: Number -> String -> String
export default curry((count, str) => (str || '').repeat(count))
