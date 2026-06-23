import curry from '../Func/curry.js'
import foldr from './foldr.js'
import initial from './initial.js'
import last from './last.js'

/**
 * Right fold over a non-empty list using its last item as the seed; curried.
 *
 * @example
 * ```ts
 * foldr1((x: number, y: number) => x - y, [1, 2, 3, 4, 9]) //=> 7
 * ```
 */
const foldr1 = curry((fn: (value: unknown, acc: unknown) => unknown, xs: readonly unknown[]) =>
  foldr(fn, last(xs), initial(xs)),
) as unknown as {
  <A>(fn: (value: A, acc: A) => A): (xs: readonly A[]) => A
  <A>(fn: (value: A, acc: A) => A, xs: readonly A[]): A
}

export default foldr1
