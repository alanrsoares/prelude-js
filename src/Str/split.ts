import curry from '../Func/curry.js'

/**
 * Splits a string on a separator; curried.
 *
 * @example
 * ```ts
 * split(',', 'a,b,c') //=> ['a', 'b', 'c']
 * ```
 */
const split = curry((sep: string | RegExp, str: string) => str.split(sep)) as unknown as {
  (sep: string | RegExp): (value: string) => string[]
  (sep: string | RegExp, value: string): string[]
}

export default split
