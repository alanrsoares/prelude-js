import initial from '../List/initial.js'
import last from '../List/last.js'

// + compose :: (b -> c) -> (a -> b) -> a -> c
export default (...fs) => (...args) =>
  initial(fs).reduceRight(
    (acc, f) => f.call(this, acc),
    last(fs).apply(this, args)
  )
