export default function fix<A extends readonly unknown[], R>(
  fn: (recur: (...args: A) => R) => (...args: A) => R,
): (...args: A) => R
