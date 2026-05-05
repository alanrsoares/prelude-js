import reduce from './reduce.js'

/**
 * @remarks
 *
 * ```text
 * or :: [a] -> Boolean
 * ```
 */
export default reduce((acc, x) => acc || !!x, false)
