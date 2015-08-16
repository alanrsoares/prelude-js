import { expect } from 'chai';
import General from '../src/General';

describe('General.js', () => {

  describe('General.negate', () => {
    it('Should return the negation of its own argument value', () => {
      expect(General.negate(0)).to.equal(true);
      expect(General.negate(null)).to.equal(true);
      expect(General.negate(undefined)).to.equal(true);
      expect(General.negate(1)).to.equal(false);
      expect(General.negate(true)).to.equal(false);
    });
  });

  describe('General.id', () => {
    it('Should return its own argument value', () => {
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

  describe('General.isType', () => {
    it('Should assert wether a value is of a given type', () => {
      expect(General.isType('String', 'a')).to.deep.equal(true);
      expect(General.isType('Array', [])).to.deep.equal(true);
      expect(General.isType('Function', () => {})).to.deep.equal(true);
      expect(General.isType('Number', 0)).to.deep.equal(true);
      expect(General.isType('Number', NaN)).to.deep.equal(true);
    });
  });

});
