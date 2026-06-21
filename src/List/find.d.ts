import type { Predicate } from '../types.d.ts'

declare const find: <A>(fn: Predicate<A>, xs: readonly A[]) => A | undefined
export default find
