import type { Accessor } from '../types.js'
import curry from '../Func/curry.js'
import merge from '../Obj/merge.js'
import values from '../Obj/values.js'

/**
 * Returns items unique by the value the accessor returns; curried.
 *
 * @example
 * ```ts
 * uniqueBy((o: { id: number }) => o.id, [{ id: 1 }, { id: 1 }, { id: 2 }]) //=> [1, 2]
 * ```
 */
const uniqueBy = curry((fn: Accessor<unknown, unknown>, xs: readonly unknown[]) => {
  const reducer = (acc: Record<string, unknown>, x: unknown) => merge(acc, { [`K_${x}`]: x })
  return values(xs.map(fn).reduce(reducer, {}))
}) as unknown as <A, B>(fn: Accessor<A, B>, xs: readonly A[]) => B[]

export default uniqueBy
