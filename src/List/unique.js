import uniqueBy from './uniqueBy.js'
import id from '../General/id.js'

/**
 * @remarks
 *
 * ```text
 * unique :: [a] -> [a]
 * ```
 */
export default (xs) => uniqueBy(id, xs)
