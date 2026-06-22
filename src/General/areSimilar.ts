import curry from '../Func/curry.js'
import fix from '../Func/fix.js'
import keys from '../Obj/keys.js'
import equals from './equals.js'
import typeOf from './typeOf.js'

/**
 * Performs a deep similarity check across arrays, objects, functions, and
 * primitive values. Curried, so it can be partially applied.
 *
 * @example
 * ```ts
 * areSimilar({ foo: ['bar'] }, { foo: ['bar'] }) //=> true
 * ```
 */
const areSimilar = fix((recur: (a: unknown, b: unknown) => boolean) =>
  curry((a: unknown, b: unknown): boolean => {
    if (typeOf(a) !== typeOf(b)) {
      return false
    }
    switch (typeOf(a)) {
      case 'Array': {
        const xs = a as unknown[]
        const ys = b as unknown[]
        return xs.length === ys.length && xs.every((x, i) => recur(x, ys[i]))
      }
      case 'Object': {
        const xo = a as Record<string, unknown>
        const yo = b as Record<string, unknown>
        const xk = keys(xo)
        return xk.length === keys(yo).length && xk.every((k) => recur(xo[k], yo[k]))
      }
      case 'Function':
        return String(a) === String(b)
      default:
        return equals(a, b)
    }
  }),
) as unknown as (left: unknown, right: unknown) => boolean

export default areSimilar
