import curry from './curry.js'

/**
 * Returns the first supplied value and ignores the second.
 *
 * @example
 * ```ts
 * constant('hello')('world') //=> 'hello'
 * constant('hello', 'world') //=> 'hello'
 * ```
 */
const constant = curry((x: unknown, _y: unknown) => x) as unknown as {
  <A>(value: A): <B>(_ignored: B) => A
  <A, B>(value: A, _ignored: B): A
}

export default constant
