import curry from '../Func/curry.js'

/**
 * Returns the item at the given index; curried.
 *
 * @example
 * ```ts
 * at(1, ['a', 'b', 'c']) //=> 'b'
 * ```
 */
const at = curry((index: number, xs: readonly unknown[]) => xs[index]) as unknown as <A>(
  index: number,
  xs: readonly A[],
) => A | undefined

export default at
