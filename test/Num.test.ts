import { describe, expect, it } from 'bun:test'
import * as Num from '../src/Num/index.js'

// Num.add is typed for numbers but delegates to JS `+`; this alias exercises
// its runtime coercion of non-numeric operands.
const add = Num.add as unknown as (a: unknown, b: unknown) => unknown

describe('Num.add', () => {
  it.each([
    { a: 1, b: 2, expected: 3 },
    { a: -1, b: 2, expected: 1 },
    { a: 'foo', b: 2, expected: 'foo2' },
    { a: 'foo', b: 'bar', expected: 'foobar' },
    { a: null, b: null, expected: 0 },
  ])('add($a, $b) === $expected', ({ a, b, expected }) => {
    expect(add(a, b)).toBe(expected)
  })

  it.each([
    { a: null, b: undefined },
    { a: undefined, b: undefined },
  ])('add($a, $b) is NaN', ({ a, b }) => {
    expect(add(a, b)).toBeNaN()
  })
})
