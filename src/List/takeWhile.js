import curry from '../Func/curry.js'

/**
 * @remarks
 *
 * ```text
 * takeWhile :: (a -> Bool) -> [a] -> [a]
 * ```
 *
 * @param arg1 - `(a -> Bool)`
 * @param arg2 - `[a]`
 *
 * @returns `[a]`
 */
export default curry((f, xs) => {
  for (const x in xs) {
    if (f(xs[x])) continue
    else return xs.slice(0, x)
  }
  return xs
})
