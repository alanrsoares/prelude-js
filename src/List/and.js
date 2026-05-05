import reduce from './reduce.js'

/**
 * `and :: [a] -> Boolean`
 */
export default reduce((acc, x) => acc && !!x, true)
