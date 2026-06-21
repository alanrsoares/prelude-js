import type { Predicate } from '../types.d.ts'

declare const span: <A>(fn: Predicate<A>, xs: readonly A[]) => [A[], A[]]
export default span
