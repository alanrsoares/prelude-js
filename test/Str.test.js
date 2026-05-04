import { describe, it } from 'bun:test'
import Str from '../src/Str/index.js'
import flip from '../src/Func/flip.js'
import { expect } from 'bun:test'

describe('Str.js', () => {
  describe('Str.capitalize', () => {
    it('Should capitalize the first character of a given string', () => {
      expect(Str.capitalize('foo')).toBe('Foo')
      expect(Str.capitalize('bAR')).toBe('BAR')
      expect(Str.capitalize('BAZ')).toBe('BAZ')
    })
  })

  describe('Str.dasherize', () => {
    it('Should convert a camelCase string to a snake-case string', () => {
      expect(Str.dasherize('fooBar')).toBe('foo-bar')
      expect(Str.dasherize('feeFiFoFoo')).toBe('fee-fi-fo-foo')
    })
  })

  describe('Str.camelize', () => {
    it('Should convert a snake-case string to a camelCase string', () => {
      expect(Str.camelize('foo-bar')).toBe('fooBar')
      expect(Str.camelize('fee-fi-fo-foo')).toBe('feeFiFoFoo')
    })
  })

  describe('Str.split', () => {
    it('Should split a string by a given separator', () => {
      expect(Str.split('-', 'foo-bar')).toEqual(['foo', 'bar'])
      expect(Str.split('-', 'fee-fi-fo-foo')).toEqual(['fee', 'fi', 'fo', 'foo'])
      expect(Str.split(/[A-Z]/, 'feeFiFoFoo')).toEqual(['fee', 'i', 'o', 'oo'])
    })
  })

  describe('Str.padLeft', () => {
    it('Should pad a string with a given value', () => {
      expect(Str.padLeft('00', 1)).toBe('01')
      expect(Str.padLeft('0000', 1)).toBe('0001')
      expect(Str.padLeft('0000', null)).toBe('0000')
      expect(Str.padLeft('0000', undefined)).toBe('0000')
      expect(Str.padLeft('0000', 30)).toBe('0030')
      expect(Str.padLeft('0000', 9999)).toBe('9999')
      expect(Str.padLeft('0000', 123456)).toBe('123456')
    })
  })

  describe('Str.contains', () => {
    it('Should tell if a given string contain a substring', () => {
      expect(Str.contains('foo', 'bar')).toBe(false)
      expect(Str.contains('foo', 'foobar')).toBe(true)
      expect(Str.contains('bar', 'foobar')).toBe(true)
      expect(Str.contains('z', 'baz')).toBe(true)
    })
  })

  describe('Str.startsWith', () => {
    it('Should tell if a given string startsWith a substring', () => {
      expect(Str.startsWith('foo', 'bar')).toBe(false)
      expect(Str.startsWith('foo', 'foobar')).toBe(true)
      expect(Str.startsWith('bar', 'foobar')).toBe(false)
      expect(Str.startsWith('b', 'baz')).toBe(true)
    })
  })

  describe('Str.take', () => {
    it('Should return a substring composed of the first n character of a string', () => {
      expect(Str.take(4, 'hello')).toBe('hell')
    })
  })

  describe('Str.takeWhile', () => {
    const isVowel = flip(Str.contains)('aeiou')

    it('Should return a substring composed of the first n character that satisfy a given predicate', () => {
      expect(Str.takeWhile(isVowel, 'art')).toBe('a')
      expect(Str.takeWhile(isVowel, 'iao')).toBe('iao')
      expect(Str.takeWhile(isVowel, 'fry')).toBe('')
    })
  })
})
