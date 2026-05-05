import curry from '../Func/curry.js'

/**
 * add :: Number -> Number -> Number
 *
 * @remarks
 * @param arg1 - `Number`
 * @param arg2 - `Number`
 * @returns `Number`
 */
export default curry((a, b) => a + b)
