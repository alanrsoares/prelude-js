import curry from '../Func/curry.js'

/**
 * Returns true when the value is present in the list; curried.
 *
 * @example
 * ```ts
 * elem(3, [1, 2, 3]) //=> true
 * ```
 */
const elem = curry((value: unknown, xs: readonly unknown[]) => xs.includes(value)) as unknown as {
  <A>(value: A): (xs: readonly A[]) => boolean
  <A>(value: A, xs: readonly A[]): boolean
}

export default elem
