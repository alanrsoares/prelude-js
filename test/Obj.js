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
});
