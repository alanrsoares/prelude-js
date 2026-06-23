import { describe, expect, it } from 'bun:test'
import * as General from '../src/General/index.js'
import type { Pair } from '../src/types.js'

describe('General.deny', () => {
  it.each([
    { value: 0, expected: true },
    { value: null, expected: true },
    { value: undefined, expected: true },
    { value: 1, expected: false },
    { value: true, expected: false },
  ])('deny($value) === $expected', ({ value, expected }) => {
    expect(General.deny(value)).toBe(expected)
  })
})

describe('General.id', () => {
  it.each([
    { value: {} },
    { value: 'foo' },
    { value: 0 },
    { value: null },
    { value: undefined },
  ])('id($value) returns its argument', ({ value }) => {
    expect(General.id(value)).toEqual(value)
  })
})

describe('General.replicate', () => {
  it.each<{ n: number; value: unknown; expected: unknown[] }>([
    { n: 3, value: 'a', expected: ['a', 'a', 'a'] },
    { n: 0, value: 'foo', expected: [] },
    { n: 2, value: 0, expected: [0, 0] },
    { n: 3, value: null, expected: [null, null, null] },
    { n: 1, value: undefined, expected: [undefined] },
  ])('replicate($n, $value) === $expected', ({ n, value, expected }) => {
    expect(General.replicate(n, value)).toEqual(expected)
  })
})

describe('General.ofType', () => {
  it.each<{ type: string; value: unknown }>([
    { type: 'String', value: 'a' },
    { type: 'Array', value: [] },
    { type: 'Function', value: () => {} },
    { type: 'Number', value: 0 },
    { type: 'Number', value: Number.NaN },
  ])('ofType($type, $value) === true', ({ type, value }) => {
    expect(General.ofType(type, value)).toBe(true)
  })
})

describe('General.areSimilar', () => {
  it.each<{ a: unknown; b: unknown; expected: boolean }>([
    { a: [1, 2, 3], b: [1, 2, 3], expected: true },
    { a: { foo: 'bar' }, b: { foo: 'bar' }, expected: true },
    { a: { foo: 'bar' }, b: { foo: 'baz' }, expected: false },
    { a: {}, b: {}, expected: true },
    { a: { a: General.areSimilar }, b: { a: General.areSimilar }, expected: true },
    { a: { a: { b: [] } }, b: { a: { b: {} } }, expected: false },
    { a: { a: { b: [2] } }, b: { a: { b: [2] } }, expected: true },
    { a: { a: { b: [1, '{}'] } }, b: { a: { b: [1, '{}'] } }, expected: true },
    { a: null, b: 1, expected: false },
    { a: [1], b: null, expected: false },
    { a: {}, b: null, expected: false },
    { a: undefined, b: null, expected: false },
    { a: null, b: null, expected: true },
    { a: undefined, b: undefined, expected: true },
  ])('areSimilar($a, $b) === $expected', ({ a, b, expected }) => {
    expect(General.areSimilar(a, b)).toBe(expected)
  })

  it('is order-sensitive across nested arrays (curried form)', () => {
    expect(
      General.areSimilar({ a: { b: [1, '{}', [3, '4', ['98']]] } })({
        a: { b: [[['98'], 3, '4'], '{}', 1] },
      }),
    ).toBe(false)
  })
})

describe('General.not', () => {
  it.each([
    { value: 0, expected: true },
    { value: true, expected: false },
    { value: '', expected: true },
  ])('not($value) === $expected', ({ value, expected }) => {
    expect(General.not(value)).toBe(expected)
  })
})

describe('General.fst', () => {
  it.each<{ pair: readonly unknown[]; expected: unknown }>([
    { pair: ['a', 'b'], expected: 'a' },
    { pair: [1, 2, 3], expected: 1 },
  ])('fst($pair) === $expected', ({ pair, expected }) => {
    expect(General.fst(pair as Pair)).toBe(expected)
  })
})

describe('General.snd', () => {
  it.each<{ pair: readonly unknown[]; expected: unknown }>([
    { pair: ['a', 'b'], expected: 'b' },
    { pair: [1, 2, 3], expected: 2 },
  ])('snd($pair) === $expected', ({ pair, expected }) => {
    expect(General.snd(pair as Pair)).toBe(expected)
  })
})
