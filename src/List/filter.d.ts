import type { Predicate } from '../types.d.ts'

export default function filter<A>(fn: Predicate<A>): (xs: readonly A[]) => A[]
export default function filter<A>(fn: Predicate<A>, xs: readonly A[]): A[]
