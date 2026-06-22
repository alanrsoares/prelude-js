import curry from '../Func/curry.js'

/**
 * Joins an array of strings with a separator; curried.
 *
 * @example
 * ```ts
 * join('-', ['a', 'b']) //=> 'a-b'
 * ```
 */
const join = curry((separator: string, xs: readonly string[]) => xs.join(separator)) as unknown as {
  (sep: string): (values: readonly string[]) => string
  (sep: string, values: readonly string[]): string
}

export default join
