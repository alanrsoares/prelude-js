import * as Str from '../src/Str';
import { expect } from 'chai';

describe('Str.js', () => {
  describe('Str.capitalize', () => {
    it('Should capitalize the first character of a given string', () => {
      expect(Str.capitalize('foo')).to.equal('Foo');
      expect(Str.capitalize('bAR')).to.equal('BAR');
      expect(Str.capitalize('BAZ')).to.equal('BAZ');
    });
  });

  describe('Str.dasherize', () => {
    it('Should convert a camelCase string to a snake-case string', () => {
      expect(Str.dasherize('fooBar')).to.equal('foo-bar');
      expect(Str.dasherize('feeFiFoFoo')).to.equal('fee-fi-fo-foo');
    });
  });

  describe('Str.camelize', () => {
    it('Should convert a snake-case string to a camelCase string', () => {
      expect(Str.camelize('foo-bar')).to.equal('fooBar');
      expect(Str.camelize('fee-fi-fo-foo')).to.equal('feeFiFoFoo');
    });
  });

});
