import curry from '../Func/curry'

// :: (a -> [b]) -> [a] -> [b]
export default curry((fn, b) => {
  const result = []

  let that
  while ((that = fn(b))) {
    result.push(that[0])
  }
  return result
})
