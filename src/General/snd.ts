/**
 * Returns the second value in a pair.
 *
 * @example
 * ```ts
 * snd(['left', 'right']) //=> 'right'
 * ```
 */
export default function snd<A, B>(pair: readonly [A, B]): B {
  return pair[1]
}
