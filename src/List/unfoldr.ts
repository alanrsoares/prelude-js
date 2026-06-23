import curry from '../Func/curry.js'

/**
 * Builds a list by repeatedly applying a generator to a seed; curried.
 *
 * @example
 * ```ts
 * unfoldr((n: number) => (n > 0 ? [n, n - 1] : undefined), 3) //=> [3, 2, 1]
 * ```
 */
const unfoldr = curry((fn: (seed: unknown) => [unknown, unknown] | undefined, b: unknown) => {
  const result: unknown[] = []
  let that = fn(b)
  while (that) {
    result.push(that[0])
    that = fn(b)
  }
  return result
}) as unknown as {
  <A, B>(fn: (seed: B) => [A, B] | undefined): (seed: B) => A[]
  <A, B>(fn: (seed: B) => [A, B] | undefined, seed: B): A[]
}

export default unfoldr
