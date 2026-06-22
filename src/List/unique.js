import id from '../General/id.js'
import uniqueBy from './uniqueBy.js'

/**
 * unique :: [a] -> [a]
 *
 * @remarks
 * @param arg1 - `[a]`
 * @returns `[a]`
 */
export default (xs) => uniqueBy(id, xs)
