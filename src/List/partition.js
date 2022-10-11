import curry from '../Func/curry'

// + partition :: (a -> Boolean) -> [a] -> [[a] [a]]
export default curry((fn, xs) => {
  const passed = []
  const failed = []
  xs.forEach((x) => (fn(x) ? passed : failed).push(x))
  return [passed, failed]
})
