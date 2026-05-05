import type { AnyFn, Compose } from '../types.d.ts'

export default function compose<Fns extends readonly AnyFn[]>(...fns: Fns): Compose<Fns>
