import type { AnyFn, Curried } from '../types.js'

/**
 * Returns a curried version of the supplied function.
 *
 * @example
 * ```ts
 * curry((a: number, b: number) => a + b)(1)(2) //=> 3
 * ```
 */
function curry<A extends readonly unknown[], R>(fn: (...args: A) => R): Curried<A, R>
function curry(this: unknown, fn: AnyFn, ...args: unknown[]): unknown {
  const c = function (this: unknown, fnArgs: unknown[]): unknown {
    if (fnArgs.length >= fn.length) {
      return fn.apply(this, fnArgs)
    }
    return (...cArgs: unknown[]) => c.call(this, [...fnArgs, ...cArgs])
  }
  return c.call(this, args)
}

export default curry
