import type { Predicate } from '../types.d.ts'

declare const all: <A>(fn: Predicate<A>, xs: readonly A[]) => boolean
export default all
