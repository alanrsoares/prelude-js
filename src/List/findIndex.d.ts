import type { Predicate } from '../types.d.ts'

declare const findIndex: <A>(fn: Predicate<A>, xs: readonly A[]) => number
export default findIndex
