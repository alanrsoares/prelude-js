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

  let that
  while ((that = fn(b))) {
    result.push(that[0])
  }
  return result
})
