import curry from '../Func/curry.js'

/**
 * dropWhile :: (a -> Bool) -> [x] -> [x]
 *
 * @remarks
 * @param arg1 - `(a -> Bool)`
 * @param arg2 - `[x]`
 * @returns `[x]`
 */
export default curry((f, xs) => {
  for (const x in xs) {
    if (f(xs[x])) continue
    else return xs.slice(x)
  }
  return []
})
