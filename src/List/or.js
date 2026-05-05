import reduce from './reduce.js'

/**
 * @remarks
 *
 * ```text
 * or :: [a] -> Boolean
 * ```
 *
 * @param arg1 - `[a]`
 *
 * @returns `Boolean`
 */
export default reduce((acc, x) => acc || !!x, false)
