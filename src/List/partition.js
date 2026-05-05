import curry from '../Func/curry.js'

/**
 * partition :: (a -> Boolean) -> [a] -> [[a] [a]]
 *
 * @remarks
 * @param arg1 - `(a -> Boolean)`
 * @param arg2 - `[a]`
 * @returns `[[a] [a]]`
 */
export default curry((fn, xs) => {
  const passed = []
  const failed = []
  xs.forEach((x) => (fn(x) ? passed : failed).push(x))
  return [passed, failed]
})
