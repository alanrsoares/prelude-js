export default function deny<A extends readonly unknown[], R>(fn: (...args: A) => R): (...args: A) => boolean
