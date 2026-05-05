import curry from '../Func/curry.js'

/**
 * `at :: Number -> [a] -> a`
 */
export default curry((index, xs) => xs[index])
