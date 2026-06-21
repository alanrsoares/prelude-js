import type { Predicate } from '../types.d.ts'

declare const partition: <A>(fn: Predicate<A>, xs: readonly A[]) => [A[], A[]]
export default partition
