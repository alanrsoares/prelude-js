export default function memoize<A extends readonly unknown[], R>(fn: (...args: A) => R): (...args: A) => R
