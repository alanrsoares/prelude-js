import type { Predicate } from '../types.d.ts'

declare const findIndices: <A>(fn: Predicate<A>, xs: readonly A[]) => number[]
export default findIndices
