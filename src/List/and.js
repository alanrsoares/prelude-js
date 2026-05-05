import reduce from './reduce.js'

/**
 * @remarks
 *
 * ```text
 * and :: [a] -> Boolean
 * ```
 */
export default reduce((acc, x) => acc && !!x, true)
