export default function apply<A extends readonly unknown[], R>(fn: (...args: A) => R, args: A): R
