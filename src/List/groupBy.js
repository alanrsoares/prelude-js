import curry from '../Func/curry.js'

/**
 * @remarks
 *
 * ```text
 * groupBy :: (a -> b) -> [a] -> { b: [b] }
 * ```
 */
export default curry((fn, xs) => xs.reduce((acc, x) => {
  const key = fn(x)
  acc[key] = acc[key] ? acc[key].concat([x]) : [x]
  return acc
}, {}))
