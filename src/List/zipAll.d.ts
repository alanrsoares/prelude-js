import type { Pair } from '../types.d.ts'

declare const zipAll: <A, B>(xs: readonly A[], ys: readonly B[]) => Array<Pair<A | undefined, B | undefined>>
export default zipAll
