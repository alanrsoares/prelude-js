import type { AnyFn, Compose } from '../types.js'
import initial from '../List/initial.js'
import last from '../List/last.js'

/**
 * Performs right-to-left function composition. The rightmost function may have
 * any arity; the remaining functions must be unary.
 *
 * @example
 * ```ts
 * compose((x: number) => x + 1, (x: number) => -x)(3) //=> -2
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
