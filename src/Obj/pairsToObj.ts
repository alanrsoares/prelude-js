/**
 * Turns a list of `[key, value]` pairs into an object.
 *
 * @example
 * ```ts
 * pairsToObj([['a', 1], ['b', 2]]) //=> { a: 1, b: 2 }
 * ```
 */
export default function pairsToObj<K extends PropertyKey, V>(
  pairs: ReadonlyArray<readonly [K, V]>,
): Record<K, V> {
  return pairs.reduce(
    (acc, x) => {
      acc[x[0]] = x[1]
      return acc
    },
    {} as Record<K, V>,
  )
}
