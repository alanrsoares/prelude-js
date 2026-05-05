import curry from '../Func/curry.js'
import fix from '../Func/fix.js'
import keys from '../Obj/keys.js'
import get from '../Obj/get.js'
import typeOf from './typeOf.js'
import equals from './equals.js'

/**
 * areSimilar :: a -> a -> Boolean
 *
 * @remarks
 * @param arg1 - `a`
 * @param arg2 - `a`
 * @returns `Boolean`
 */
export default fix((areSimilar) => curry((a, b) => {
  if (!equals(...[a, b].map(typeOf))) {
    return false
  }

  switch (typeOf(a)) {
    case 'Array':
      return equals(...[a, b].map(get('length'))) &&
        keys(a).reduce((acc, k) => acc && areSimilar((a[k]), (b[k])), true)
    case 'Object':
      return equals(...[a, b].map(keys).map(get('length'))) &&
        keys(a).reduce((acc, k) => acc && areSimilar(a[k], b[k]), true)
    case 'Function':
      return equals(a.toString(), b.toString())
    default:
      return equals(a, b)
  }
}))
