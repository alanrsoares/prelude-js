import type { Reducer } from '../types.d.ts'

declare const scanl1: <A, B>(fn: Reducer<A, B>, initial: A, xs: readonly B[]) => A[]
export default scanl1
