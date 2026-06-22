import type { Accessor } from '../types.d.ts'

declare const map: <A extends Record<string, unknown>, B>(
  fn: Accessor<A, B>,
  obj: A,
) => Record<string, B>
export default map
