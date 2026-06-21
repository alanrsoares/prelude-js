import type { Mapper } from '../types.d.ts'

declare const concatMap: <A, B>(fn: Mapper<A, readonly B[]>, xs: readonly A[]) => B[]
export default concatMap
