import curry from '../Func/curry.js'
import elem from './elem.js'

/**
 * Returns true when the value is absent from the list; curried.
 *
 * @example
 * ```ts
 * notElem(4, [1, 2, 3]) //=> true
 * ```
 */
const notElem = curry((value: unknown, xs: readonly unknown[]) => !elem(value, xs)) as unknown as {
  <A>(value: A): (xs: readonly A[]) => boolean
  <A>(value: A, xs: readonly A[]): boolean
}

export default notElem
