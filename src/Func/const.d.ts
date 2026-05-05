export default function constant<A>(value: A): <B>(_ignored: B) => A
export default function constant<A, B>(value: A, _ignored: B): A
