import curry from '../Func/curry.js'

/**
 * @remarks
 *
 * ```text
 * countBy :: (a -> b) -> [a] -> { b: Number }
 * ```
 *
 * @param arg1 - `(a -> b)`
 * @param arg2 - `[a]`
 *
 * @returns `{ b: Number }`
 */
export default curry((fn, xs) => xs.reduce((acc, x) => {
  const key = fn(x)
  acc[key] = acc[key] ? acc[key] + 1 : 1
  return acc
}, {}))
