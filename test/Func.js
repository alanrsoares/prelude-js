import { expect } from 'chai';
import Func from '../src/Func';

describe('Func.js', () => {
  describe('Funct.curry', () => {
    it('Should allow partial application of a function', () => {
      const sum = Func.curry((a, b) => a + b);
      const increment = sum(1);
      expect(sum(1, 2)).to.equal(3);
      expect(sum(3)(2)).to.equal(5);
      expect(increment(1)).to.equal(2);
    });
  });
});
