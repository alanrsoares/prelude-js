import reduce from './reduce.js'

/**
 * and :: [a] -> Boolean
 *
 * @remarks
 * @param arg1 - `[a]`
 * @returns `Boolean`
 */
export default reduce((acc, x) => acc && !!x, true)
