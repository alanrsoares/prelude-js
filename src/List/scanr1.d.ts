declare const scanr1: <A, B>(
  fn: (value: B, acc: A, index: number, array: readonly B[]) => A,
  initial: A,
  xs: readonly B[],
) => A[]
export default scanr1
