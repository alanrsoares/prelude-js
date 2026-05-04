import { describe, expect, it } from 'bun:test'
import Obj from '../src/Obj/index.js'

describe('Obj.js', () => {
  describe('Obj.keys', () => {
    it('Should return the list of keys in a given Object', () => {
      expect(Obj.keys({ a: 2, b: 3, c: 9 })).toEqual(['a', 'b', 'c'])
    })
  })
  describe('Obj.values', () => {
    it('Should return the list of values in a given Object', () => {
      expect(Obj.values({ a: 2, b: 3, c: 9 })).toEqual([2, 3, 9])
    })
  })
  describe('Obj.clone', () => {
    it('Should return a copy of a given object, with no reference to it', () => {
      expect(Obj.clone({ a: 2, b: 3, c: 9 })).toEqual({ a: 2, b: 3, c: 9 })
      expect(Obj.clone({ a: 2, b: 3, c: 9 })).not.toBe({ a: 2, b: 3, c: 9 })
      expect(Obj.clone({})).not.toBe({})
      expect(Obj.clone(3)).toBe(3)
      expect(Obj.clone('3')).toBe('3')
      expect(Obj.clone(null)).toBe(null)
    })
  })
  describe('Obj.merge', () => {
    it('Should merge any number of objects to the first given object', () => {
      expect(Obj.merge({ a: 2, c: 9 }, { b: 3 })).toEqual({ a: 2, b: 3, c: 9 })
      expect(Obj.merge({}, { a: 2, c: 9 }, { b: 3 })).toEqual({ a: 2, b: 3, c: 9 })
      expect(Obj.merge({ a: 2, c: 9 }, { b: 3 }, { a: 4 })).toEqual({ a: 4, b: 3, c: 9 })
    })
  })
  describe('Obj.pairsToObj', () => {
    it('Takes a list of pairs and turns them into an object', () => {
      expect(
        Obj.pairsToObj([
          ['a', 'b'],
          ['c', 'd'],
          ['e', 1],
        ]),
      ).toEqual({ a: 'b', c: 'd', e: 1 })
    })
  })

  describe('Obj.objToPairs', () => {
    it('Takes an object and returns a list of pairs', () => {
      expect(Obj.objToPairs({ a: 'b', c: 'd', e: 1 })).toEqual([
        ['a', 'b'],
        ['c', 'd'],
        ['e', 1],
      ])
    })
  })

  describe('Obj.get', () => {
    it('Should return a member (property or method) from a given object', () => {
      expect(Obj.get('foo', { foo: 'bar' })).toBe('bar')
      expect(Obj.get('length', [])).toBe(0)
      expect(Obj.get('length', 'foo')).toBe(3)
    })
  })
})
