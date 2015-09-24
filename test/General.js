import { expect } from 'chai';
import General from '../src/General';

describe('General.js', () => {

  describe('General.deny', () => {
    it('Should return the negation of its own argument value', () => {
      expect(General.deny(0)).to.equal(true);
      expect(General.deny(null)).to.equal(true);
      expect(General.deny(undefined)).to.equal(true);
      expect(General.deny(1)).to.equal(false);
      expect(General.deny(true)).to.equal(false);
    });
  });

  describe('General.id', () => {
    it('Should return its own argument value', () => {
      expect(General.id({})).to.deep.equal({});
      expect(General.id('foo')).to.equal('foo');
      expect(General.id(0)).to.equal(0);
      expect(General.id(null)).to.equal(null);
      expect(General.id(undefined)).to.equal(undefined);
    });
  });

  describe('General.replicate', () => {
    it('Should return a new list with a sequence of the second argument with the first argument length', () => {
      expect(General.replicate(3, 'a')).to.deep.equal(['a', 'a', 'a']);
      expect(General.replicate(0, 'foo')).to.deep.equal([]);
      expect(General.replicate(2, 0)).to.deep.equal([0, 0]);
      expect(General.replicate(3, null)).to.deep.equal([null, null, null]);
      expect(General.replicate(1, undefined)).to.deep.equal([undefined]);
    });
  });

  describe('General.ofType', () => {
    it('Should assert wether a value is of a given type', () => {
      expect(General.ofType('String', 'a')).to.deep.equal(true);
      expect(General.ofType('Array', [])).to.deep.equal(true);
      expect(General.ofType('Function', () => {})).to.deep.equal(true);
      expect(General.ofType('Number', 0)).to.deep.equal(true);
      expect(General.ofType('Number', NaN)).to.deep.equal(true);
    });
  });

  describe('General.areSimilar', () => {
    it('Should tell wether two items are similar, regardless of order of properties', () => {
      expect(General.areSimilar([1, 2, 3], [1, 2, 3])).to.equal(true);
      expect(General.areSimilar({ foo: 'bar' }, { foo: 'bar' })).to.equal(true);
      expect(General.areSimilar({ foo: 'bar' }, { foo: 'baz' })).to.equal(false);
      expect(General.areSimilar({}, {})).to.equal(true);
      expect(General.areSimilar({ a: General.areSimilar }, { a: General.areSimilar })).to.equal(true);
      expect(General.areSimilar({ a: { b: [] } }, { a: { b: {} } })).to.equal(false);
      expect(General.areSimilar({ a: { b: [2] } }, { a: { b: [2] } })).to.equal(true);
      expect(General.areSimilar({ a: { b: [1, '{}'] } }, { a: { b: [1, '{}'] } })).to.equal(true);
      expect(General.areSimilar({ a: { b: [1, '{}'] } }, { a: { b: [1, '{}'] } })).to.equal(true);
      expect(General.areSimilar({ a: { b: [1, '{}', [3, '4', ['98']]] } })({ a: { b: [[['98'], 3, '4'], '{}', 1] } })).to.equal(false);
      expect(General.areSimilar(null, 1)).to.equal(false);
      expect(General.areSimilar([1], null)).to.equal(false);
      expect(General.areSimilar({}, null)).to.equal(false);
      expect(General.areSimilar(undefined, null)).to.equal(false);
      expect(General.areSimilar(null, null)).to.equal(true);
      expect(General.areSimilar(undefined, undefined)).to.equal(true);
    });
  });

});
