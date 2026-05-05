import type { Curried } from '../types.d.ts'

export default function curry<A extends readonly unknown[], R>(fn: (...args: A) => R): Curried<A, R>
