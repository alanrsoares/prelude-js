import type { Reverse } from '../types.d.ts'

export default function flip<A extends readonly unknown[], R>(
  fn: (...args: A) => R,
): (...args: Reverse<A>) => R
