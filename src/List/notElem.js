import curry from '../Func/curry.js'
import elem from './elem.js'

/**
 * @remarks
 *
 * ```text
 * notElem :: a -> [a] -> Boolean
 * ```
 *
 * @param arg1 - `a`
 * @param arg2 - `[a]`
 *
 * @returns `Boolean`
 */
export default curry((value, xs) => !elem(value, xs))
