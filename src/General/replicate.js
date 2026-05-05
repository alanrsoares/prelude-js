import curry from '../Func/curry.js'
import range from '../List/range.js'

/**
 * replicate :: (Number, b) -> [b]
 *
 * @remarks
 * @param arg1 - `(Number, b)`
 * @returns `[b]`
 */
export const replicate = curry((n, x) => range(n).map(() => x))

export default replicate
