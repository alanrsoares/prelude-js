import uniqueBy from './uniqueBy.js'
import id from '../General/id.js'

/**
 * unique :: [a] -> [a]
 *
 * @remarks
 * @param arg1 - `[a]`
 * @returns `[a]`
 */
export default (xs) => uniqueBy(id, xs)
