import reduce from './reduce.js'

/**
 * or :: [a] -> Boolean
 *
 * @remarks
 * @param arg1 - `[a]`
 * @returns `Boolean`
 */
export default reduce((acc, x) => acc || !!x, false)
