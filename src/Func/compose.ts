import type { AnyFn, Compose } from '../types.d.ts'
import initial from '../List/initial.js'
import last from '../List/last.js'

/**
 * Performs right-to-left function composition. The rightmost function may have
 * any arity; the remaining functions must be unary.
 *
 * @example
 * ```ts
 * const plus1 = (x: number) => x + 1
 * const negate = (x: number) => -x
 * const complex = compose(plus1, negate, Math.pow)
 * complex(3, 2) //=> plus1(negate(Math.pow(3, 2)))
 * ```
 */
const compose = ((...fs: AnyFn[]) =>
  (...args: unknown[]) =>
    (initial(fs) as AnyFn[]).reduceRight((acc, f) => f(acc), (last(fs) as AnyFn)(...args))) as <
  Fns extends readonly AnyFn[],
>(
  ...fns: Fns
) => Compose<Fns>

export default compose
