import curry from '../Func/curry.js'
import drop from './drop.js'
import take from './take.js'

/**
 * `splitAt :: Number -> [a] -> [[a], [a]]`
 */
export default curry((index, xs) => [take(index, xs), drop(index, xs)])
