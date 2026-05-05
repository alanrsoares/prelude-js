import { describe, expect, it } from 'bun:test'
import {
  compileSignature,
  convertSource,
  normalizeSignature,
} from '../scripts/compile-signatures-to-tsdoc.js'

describe('tsdoc compiler', () => {
  it('normalizes raw signatures', () => {
    expect(normalizeSignature('map :: (a → b) -> [a] -> [b]', '/tmp/map.js')).toBe(
      'map :: (a -> b) -> [a] -> [b]',
    )
    expect(normalizeSignature(':: a -> b', '/tmp/id.js')).toBe('id :: a -> b')
  })

  it('compiles a signature to valid tsdoc', () => {
    expect(compileSignature('map :: (a -> b) -> [a] -> [b]')).toBe(
      [
        '/**',
        ' * @remarks',
        ' *',
        ' * ```text',
        ' * map :: (a -> b) -> [a] -> [b]',
        ' * ```',
        ' *',
        ' * @param arg1 - `(a -> b)`',
        ' * @param arg2 - `[a]`',
        ' *',
        ' * @returns `[b]`',
        ' */',
      ].join('\n'),
    )
  })

  it('compiles line comments and existing jsdoc signature blocks', () => {
    const lineComment = ['// + map :: (a -> b) -> [a] -> [b]', 'export default map'].join('\n')
    const jsdocBlock = [
      '/**',
      ' * `map :: (a -> b) -> [a] -> [b]`',
      ' */',
      'export default map',
    ].join('\n')
    const expected = [
      '/**',
      ' * @remarks',
      ' *',
      ' * ```text',
      ' * map :: (a -> b) -> [a] -> [b]',
      ' * ```',
      ' *',
      ' * @param arg1 - `(a -> b)`',
      ' * @param arg2 - `[a]`',
      ' *',
      ' * @returns `[b]`',
      ' */',
      'export default map',
    ].join('\n')

    expect(convertSource(lineComment, '/tmp/map.js')).toBe(expected)
    expect(convertSource(jsdocBlock, '/tmp/map.js')).toBe(expected)
    expect(convertSource(expected, '/tmp/map.js')).toBe(null)
  })
})
