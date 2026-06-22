/**
 * Returns the supplied value unchanged.
 *
 * @example
 * ```ts
 * id('foo') //=> 'foo'
 * ```
 */
export const id = <T>(value: T): T => value

export default id
