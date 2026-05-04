import curry from '../Func/curry.js'

// + split :: String -> String -> String[]
export default curry((sep, str) => str.split(sep))
