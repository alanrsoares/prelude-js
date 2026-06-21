import type { Predicate } from '../types.d.ts'

declare const dropWhile: <A>(fn: Predicate<A>, xs: readonly A[]) => A[]
export default dropWhile
