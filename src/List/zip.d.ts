import type { Pair } from '../types.d.ts'

declare const zip: <A, B>(xs: readonly A[], ys: readonly B[]) => Array<Pair<A, B>>
export default zip
