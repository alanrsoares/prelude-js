import type { Predicate } from '../types.d.ts'

declare const breakList: <A>(fn: Predicate<A>, xs: readonly A[]) => [A[], A[]]
export default breakList
