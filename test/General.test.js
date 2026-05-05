import { describe, expect, it } from 'bun:test'
import * as General from '../src/General/index.js'
import { Case, run } from './cases.js'

describe('General.js', () => {
  describe('General.deny', () => {
    it('Should return the negation of its own argument value', () => {
      expect(General.deny(0)).toBe(true)
      expect(General.deny(null)).toBe(true)
      expect(General.deny(undefined)).toBe(true)
      expect(General.deny(1)).toBe(false)
      expect(General.deny(true)).toBe(false)
    })
  })

  describe('General.id', () => {
    it('Should return its own argument value', () => {
      expect(General.id({})).toEqual({})
      expect(General.id('foo')).toBe('foo')
      expect(General.id(0)).toBe(0)
      expect(General.id(null)).toBe(null)
      expect(General.id(undefined)).toBe(undefined)
    })
  })

  describe('General.replicate', () => {
    it('Should return a new list with a sequence of the second argument with the first argument length', () => {
      expect(General.replicate(3, 'a')).toEqual(['a', 'a', 'a'])
      expect(General.replicate(0, 'foo')).toEqual([])
      expect(General.replicate(2, 0)).toEqual([0, 0])
      expect(General.replicate(3, null)).toEqual([null, null, null])
      expect(General.replicate(1, undefined)).toEqual([undefined])
    })
  })

  describe('General.ofType', () => {
    it('Should assert wether a value is of a given type', () => {
      expect(General.ofType('String', 'a')).toEqual(true)
      expect(General.ofType('Array', [])).toEqual(true)
      expect(General.ofType('Function', () => {})).toEqual(true)
      expect(General.ofType('Number', 0)).toEqual(true)
      expect(General.ofType('Number', Number.NaN)).toEqual(true)
    })
  })

  describe('General.areSimilar', () => {
    it('Should tell wether two items are similar, regardless of order of properties', () => {
      expect(General.areSimilar([1, 2, 3], [1, 2, 3])).toBe(true)
      expect(General.areSimilar({ foo: 'bar' }, { foo: 'bar' })).toBe(true)
      expect(General.areSimilar({ foo: 'bar' }, { foo: 'baz' })).toBe(false)
      expect(General.areSimilar({}, {})).toBe(true)
      expect(General.areSimilar({ a: General.areSimilar }, { a: General.areSimilar })).toBe(true)
      expect(General.areSimilar({ a: { b: [] } }, { a: { b: {} } })).toBe(false)
      expect(General.areSimilar({ a: { b: [2] } }, { a: { b: [2] } })).toBe(true)
      expect(General.areSimilar({ a: { b: [1, '{}'] } }, { a: { b: [1, '{}'] } })).toBe(true)
      expect(General.areSimilar({ a: { b: [1, '{}'] } }, { a: { b: [1, '{}'] } })).toBe(true)
      expect(
        General.areSimilar({ a: { b: [1, '{}', [3, '4', ['98']]] } })({
          a: { b: [[['98'], 3, '4'], '{}', 1] },
        }),
      ).toBe(false)
      expect(General.areSimilar(null, 1)).toBe(false)
      expect(General.areSimilar([1], null)).toBe(false)
      expect(General.areSimilar({}, null)).toBe(false)
      expect(General.areSimilar(undefined, null)).toBe(false)
      expect(General.areSimilar(null, null)).toBe(true)
      expect(General.areSimilar(undefined, undefined)).toBe(true)
    })
  })

  describe('General.not', () => {
    it('Should negate a value', () => {
      run(General.not, Case([0], true), Case([true], false), Case([''], true))
    })
  })

  describe('General.fst', () => {
    it('Should return the first value in a pair', () => {
      run(General.fst, Case([['a', 'b']], 'a'), Case([[1, 2, 3]], 1))
    })
  })

  describe('General.snd', () => {
    it('Should return the second value in a pair', () => {
      run(General.snd, Case([['a', 'b']], 'b'), Case([[1, 2, 3]], 2))
    })
  })
})
