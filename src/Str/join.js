import curry from '../Func/curry.js'

// + join :: String -> String[] -> String
export default curry((separator, xs) => xs.join(separator))
