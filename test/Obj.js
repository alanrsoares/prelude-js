import { expect } from 'chai';
import * as Obj from '../src/Obj';

describe('Obj.js', () => {
  describe('Obj.keys', () => {
    it('Should return the list of keys in a given Object', () => {
      expect(Obj.keys({ a: 2, b: 3, c: 9 })).to.deep.equal(['a', 'b', 'c']);
    });
  });
  describe('Obj.values', () => {
    it('Should return the list of values in a given Object', () => {
      expect(Obj.values({ a: 2, b: 3, c: 9 })).to.deep.equal([2, 3, 9]);
    });
  });
  describe('Obj.clone', () => {
    it('Should return a copy of a given object, with no reference to it', () => {
      expect(Obj.clone({ a: 2, b: 3, c: 9 })).to.deep.equal({ a: 2, b: 3, c: 9 });
      expect(Obj.clone({ a: 2, b: 3, c: 9 })).not.to.equal({ a: 2, b: 3, c: 9 });
    });
  });
  describe('Obj.merge', () => {
    it('Should merge any number of objects to the first given object', () => {
      expect(Obj.merge({ a: 2, c: 9 }, { b: 3 })).to.deep.equal({ a: 2, b: 3, c: 9 });
      expect(Obj.merge({}, { a: 2, c: 9 }, { b: 3 })).to.deep.equal({ a: 2, b: 3, c: 9 });
      expect(Obj.merge({ a: 2, c: 9 }, { b: 3 }, { a: 4 })).to.deep.equal({ a: 4, b: 3, c: 9 });
    });
  });
  describe('Obj.pairsToObj', () => {
    it('Takes a list of pairs and turns them into an object', () => {
      expect(Obj.pairsToObj([['a', 'b'], ['c', 'd'], ['e', 1]])).to.deep.equal({ a: 'b', c: 'd', e: 1 });
    });
  });

  describe('Obj.objToPairs', () => {
    it('Takes an object and returns a list of pairs', () => {
      expect(Obj.objToPairs({ a: 'b', c: 'd', e: 1 })).to.deep.equal([['a', 'b'], ['c', 'd'], ['e', 1]]);
    });
  });

});
