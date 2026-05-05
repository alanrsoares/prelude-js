import curry from '../Func/curry.js'
import range from '../List/range.js'

/**
 * @remarks
 *
 * ```text
 * replicate :: (Number, b) -> [b]
 * ```
 */
export const replicate = curry((n, x) => range(n).map(() => x))

export default replicate
