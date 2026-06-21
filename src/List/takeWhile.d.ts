import type { Predicate } from '../types.d.ts'

declare const takeWhile: <A>(fn: Predicate<A>, xs: readonly A[]) => A[]
export default takeWhile
