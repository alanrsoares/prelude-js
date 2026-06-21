import type { Predicate } from '../types.d.ts'

declare const reject: <A>(fn: Predicate<A>, xs: readonly A[]) => A[]
export default reject
