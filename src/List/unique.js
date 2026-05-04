import uniqueBy from './uniqueBy.js'
import id from '../General/id.js'

// + unique :: [a] -> [a]
export default (xs) => uniqueBy(id, xs)
