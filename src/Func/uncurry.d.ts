import type { AnyFn, Curried } from '../types.d.ts'

export default function uncurry<A extends readonly unknown[], R>(fn: Curried<A, R>): (...args: A) => R
