import curry from '../Func/curry.js'

/**
 * Adds two numbers; curried for partial application.
 *
 * @example
 * ```ts
 * add(1)(2) //=> 3
 * add(1, 2) //=> 3
 * ```
 */
const add = curry((a: number, b: number) => a + b) as unknown as {
  (a: number): (b: number) => number
  (a: number, b: number): number
}

export default add
