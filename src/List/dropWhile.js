import curry from '../Func/curry.js'

/**
 * @remarks
 *
 * ```text
 * dropWhile :: (a -> Bool) -> [x] -> [x]
 * ```
 *
 * @param arg1 - `(a -> Bool)`
 * @param arg2 - `[x]`
 *
 * @returns `[x]`
 */
export default curry((f, xs) => {
  for (const x in xs) {
    if (f(xs[x])) continue
    else return xs.slice(x)
  }
  return []
})
