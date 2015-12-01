import * as Str from '../src/Str';
import flip from '../Func/flip';
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

  describe('Str.split', () => {
    it('Should split a string by a given separator', () => {
      expect(Str.split('-', 'foo-bar')).to.deep.equal(['foo', 'bar']);
      expect(Str.split('-', 'fee-fi-fo-foo')).to.deep.equal(['fee', 'fi', 'fo', 'foo']);
      expect(Str.split(/[A-Z]/, 'feeFiFoFoo')).to.deep.equal(['fee', 'i', 'o', 'oo']);
    });
  });

  describe('Str.padLeft', () => {
    it('Should pad a string with a given value', () => {
      expect(Str.padLeft("00", 1)).to.equal("01");
      expect(Str.padLeft("0000", 1)).to.equal("0001");
      expect(Str.padLeft("0000", null)).to.equal("0000");
      expect(Str.padLeft("0000", undefined)).to.equal("0000");
      expect(Str.padLeft("0000", 30)).to.equal("0030");
      expect(Str.padLeft("0000", 9999)).to.equal("9999");
      expect(Str.padLeft("0000", 123456)).to.equal("123456");
    });
  });

  describe('Str.contains', () => {
    it('Should tell if a given string contain a substring', () => {
      expect(Str.contains("foo", "bar")).to.equal(false);
      expect(Str.contains("foo", "foobar")).to.equal(true);
      expect(Str.contains("bar", "foobar")).to.equal(true);
      expect(Str.contains("z", "baz")).to.equal(true);
    });
  });

  describe('Str.startsWith', () => {
    it('Should tell if a given string startsWith a substring', () => {
      expect(Str.startsWith("foo", "bar")).to.equal(false);
      expect(Str.startsWith("foo", "foobar")).to.equal(true);
      expect(Str.startsWith("bar", "foobar")).to.equal(false);
      expect(Str.startsWith("b", "baz")).to.equal(true);
    });
  });

  describe('Str.take', () => {
    it('Should return a substring composed of the first n character of a string', () => {
      expect(Str.take(4, 'hello')).to.equal('hell');
    });
  });

  describe('Str.takeWhile', () => {
    const isVowel = flip(Str.contains)('aeiou');

    it('Should return a substring composed of the first n character that satisfy a given predicate', () => {
      expect(Str.takeWhile(isVowel, 'art')).to.equal('a');
      expect(Str.takeWhile(isVowel, 'iao')).to.equal('iao');
      expect(Str.takeWhile(isVowel, 'fry')).to.equal('');
    });
  });

});
