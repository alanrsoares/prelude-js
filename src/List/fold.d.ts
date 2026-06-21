import type { Reducer } from '../types.d.ts'

declare const fold: <A, B>(fn: Reducer<A, B>, initial: A, xs: readonly B[]) => A
export default fold
