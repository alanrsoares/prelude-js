import type { Comparer } from '../types.d.ts'

declare const sortWith: <A>(fn: Comparer<A>, xs: readonly A[]) => A[]
export default sortWith
