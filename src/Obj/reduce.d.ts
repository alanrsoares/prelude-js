import type { Reducer } from '../types.d.ts'

declare const reduce: <A, B extends Record<string, unknown>>(
  fn: Reducer<A, [keyof B, B[keyof B]]>,
  initial: A,
  obj: B,
) => A
export default reduce
