/**
 * Returns the first value in a pair.
 *
 * @example
 * ```ts
 * fst(['left', 'right']) //=> 'left'
 * ```
 */
export default function fst<A, B>(pair: readonly [A, B]): A {
  return pair[0]
}
