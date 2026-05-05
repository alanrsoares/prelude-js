import curry from '../Func/curry.js'

/**
 * `contains :: String -> String -> Bool`
 */
export default curry((search, target) => target && target.indexOf(search) > -1)
