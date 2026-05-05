import curry from '../Func/curry.js'
import merge from '../Obj/merge.js'
import values from '../Obj/values.js'

/**
 * `uniqueBy :: (a -> b) -> [a] -> [a]`
 */
export default curry((fn, xs) => {
  const reducer = (acc, x) => merge(acc, { [`K_${x}`]: x })
  return values(xs.map(fn).reduce(reducer, {}))
})
