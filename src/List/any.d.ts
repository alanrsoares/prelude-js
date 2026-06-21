import type { Predicate } from '../types.d.ts'

declare const any: <A>(fn: Predicate<A>, xs: readonly A[]) => boolean
export default any
