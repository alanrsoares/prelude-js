import initial from '../List/initial'
import last from '../List/last'

// + compose :: (b -> c) -> (a -> b) -> a -> c
export default (...fs) => (...args) =>
  initial(fs).reduceRight(
    (acc, f) => f.call(this, acc),
    last(fs).apply(this, args)
  )
