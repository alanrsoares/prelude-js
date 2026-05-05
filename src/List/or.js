import reduce from './reduce.js'

/**
 * `or :: [a] -> Boolean`
 */
export default reduce((acc, x) => acc || !!x, false)
