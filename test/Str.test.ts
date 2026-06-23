import { describe, expect, it } from 'bun:test'
import * as Str from '../src/Str/index.js'

describe('Str.capitalize', () => {
  it.each([
    { input: 'foo', expected: 'Foo' },
    { input: 'bAR', expected: 'BAR' },
    { input: 'BAZ', expected: 'BAZ' },
  ])('capitalize($input) === $expected', ({ input, expected }) => {
    expect(Str.capitalize(input)).toBe(expected)
  })
})

describe('Str.dasherize', () => {
  it.each([
    { input: 'fooBar', expected: 'foo-bar' },
    { input: 'feeFiFoFoo', expected: 'fee-fi-fo-foo' },
  ])('dasherize($input) === $expected', ({ input, expected }) => {
    expect(Str.dasherize(input)).toBe(expected)
  })
})

describe('Str.camelize', () => {
  it.each([
    { input: 'foo-bar', expected: 'fooBar' },
    { input: 'fee-fi-fo-foo', expected: 'feeFiFoFoo' },
  ])('camelize($input) === $expected', ({ input, expected }) => {
    expect(Str.camelize(input)).toBe(expected)
  })
})

describe('Str.split', () => {
  it.each<{ sep: string | RegExp; input: string; expected: string[] }>([
    { sep: '-', input: 'foo-bar', expected: ['foo', 'bar'] },
    { sep: '-', input: 'fee-fi-fo-foo', expected: ['fee', 'fi', 'fo', 'foo'] },
    { sep: /[A-Z]/, input: 'feeFiFoFoo', expected: ['fee', 'i', 'o', 'oo'] },
  ])('split($sep, $input)', ({ sep, input, expected }) => {
    expect(Str.split(sep, input)).toEqual(expected)
  })
})

describe('Str.padLeft', () => {
  it.each<{ pad: string; value: string | number | null | undefined; expected: string }>([
    { pad: '00', value: 1, expected: '01' },
    { pad: '0000', value: 1, expected: '0001' },
    { pad: '0000', value: null, expected: '0000' },
    { pad: '0000', value: undefined, expected: '0000' },
    { pad: '0000', value: 30, expected: '0030' },
    { pad: '0000', value: 9999, expected: '9999' },
    { pad: '0000', value: 123456, expected: '123456' },
  ])('padLeft($pad, $value) === $expected', ({ pad, value, expected }) => {
    expect(Str.padLeft(pad, value)).toBe(expected)
  })
})

describe('Str.contains', () => {
  it.each([
    { search: 'foo', target: 'bar', expected: false },
    { search: 'foo', target: 'foobar', expected: true },
    { search: 'bar', target: 'foobar', expected: true },
    { search: 'z', target: 'baz', expected: true },
  ])('contains($search, $target) === $expected', ({ search, target, expected }) => {
    expect(Str.contains(search, target)).toBe(expected)
  })
})

describe('Str.startsWith', () => {
  it.each([
    { search: 'foo', target: 'bar', expected: false },
    { search: 'foo', target: 'foobar', expected: true },
    { search: 'bar', target: 'foobar', expected: false },
    { search: 'b', target: 'baz', expected: true },
  ])('startsWith($search, $target) === $expected', ({ search, target, expected }) => {
    expect(Str.startsWith(search, target)).toBe(expected)
  })
})

describe('Str.take', () => {
  it('returns the first n characters', () => {
    expect(Str.take(4, 'hello')).toBe('hell')
  })
})

describe('Str.takeWhile', () => {
  const isVowel = (char: string) => Str.contains(char, 'aeiou')

  it.each([
    { input: 'art', expected: 'a' },
    { input: 'iao', expected: 'iao' },
    { input: 'fry', expected: '' },
  ])('takeWhile(isVowel, $input) === $expected', ({ input, expected }) => {
    expect(Str.takeWhile(isVowel, input)).toBe(expected)
  })
})
