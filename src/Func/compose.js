import initial from '../List/initial.js'
import last from '../List/last.js'

/**
 * compose :: (b -> c) -> (a -> b) -> a -> c
 *
 * @remarks
 * @param arg1 - `(b -> c)`
 * @param arg2 - `(a -> b)`
 * @param arg3 - `a`
 * @returns `c`
 */
export default (...fs) => (...args) =>
  initial(fs).reduceRight(
    (acc, f) => f.call(this, acc),
    last(fs).apply(this, args)
  )
