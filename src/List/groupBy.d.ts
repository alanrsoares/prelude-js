import type { Predicate } from '../types.d.ts'

declare const groupBy: <A>(fn: Predicate<A>, xs: readonly A[]) => A[][]
export default groupBy
