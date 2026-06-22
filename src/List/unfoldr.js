import curry from '../Func/curry.js'

/**
 * unfoldr :: (a -> [b]) -> [a] -> [b]
 *
 * @remarks
 * @param arg1 - `(a -> [b])`
 * @param arg2 - `[a]`
 * @returns `[b]`
 */
export default curry((fn, b) => {
  const result = []

  let that = fn(b)
  while (that) {
    result.push(that[0])
    that = fn(b)
  }
  return result
})
