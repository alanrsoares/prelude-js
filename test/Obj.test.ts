import { describe, expect, it } from 'bun:test'
import * as Obj from '../src/Obj/index.js'

describe('Obj.keys', () => {
  it('returns the list of keys in a given object', () => {
    expect(Obj.keys({ a: 2, b: 3, c: 9 })).toEqual(['a', 'b', 'c'])
  })
})

describe('Obj.values', () => {
  it('returns the list of values in a given object', () => {
    expect(Obj.values({ a: 2, b: 3, c: 9 })).toEqual([2, 3, 9])
  })
})

describe('Obj.clone', () => {
  it('returns a structural copy with no reference to the source', () => {
    const source = { a: 2, b: 3, c: 9 }
    expect(Obj.clone(source)).toEqual(source)
    expect(Obj.clone(source)).not.toBe(source)
    expect(Obj.clone({})).not.toBe({})
  })

  it.each([
    { value: 3 },
    { value: '3' },
    { value: null },
  ])('passes the primitive $value through unchanged', ({ value }) => {
    expect(Obj.clone(value)).toBe(value)
  })
})

describe('Obj.merge', () => {
  it.each([
    { sources: [{ a: 2, c: 9 }, { b: 3 }], expected: { a: 2, b: 3, c: 9 } },
    { sources: [{}, { a: 2, c: 9 }, { b: 3 }], expected: { a: 2, b: 3, c: 9 } },
    { sources: [{ a: 2, c: 9 }, { b: 3 }, { a: 4 }], expected: { a: 4, b: 3, c: 9 } },
  ])('merges $sources into $expected (later sources win)', ({ sources, expected }) => {
    const merge = Obj.merge as (...objs: object[]) => object
    expect(merge(...sources)).toEqual(expected)
  })
})

describe('Obj.pairsToObj', () => {
  it('turns a list of pairs into an object', () => {
    const pairs: Array<readonly [string, string | number]> = [
      ['a', 'b'],
      ['c', 'd'],
      ['e', 1],
    ]
    expect(Obj.pairsToObj(pairs)).toEqual({ a: 'b', c: 'd', e: 1 })
  })
})

describe('Obj.objToPairs', () => {
  it('turns an object into a list of pairs', () => {
    expect(Obj.objToPairs({ a: 'b', c: 'd', e: 1 })).toEqual([
      ['a', 'b'],
      ['c', 'd'],
      ['e', 1],
    ])
  })
})

describe('Obj.get', () => {
  it('reads a property from an object', () => {
    expect(Obj.get('foo', { foo: 'bar' })).toBe('bar')
  })

  it('reads members off arrays and strings', () => {
    expect(Obj.get('length', [])).toBe(0)
    expect(Obj.get('length', 'foo')).toBe(3)
  })
})
