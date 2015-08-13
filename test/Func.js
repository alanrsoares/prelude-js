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

  describe('Funct.apply', () => {
    it('Should return the application of the supplied list as arguments to the supplied function', () => {
      const sum = Func.curry((a, b) => a + b);
      const sumAll = (...xs) => xs.reduce(sum);
      expect(Func.apply(sum, [2, 3])).to.equal(5);
      expect(Func.apply(sumAll, [1, 2, 3, 4, 5])).to.equal(15);
    });
  });

  describe('Funct.flip', () => {
    it('Should return a function with the arguments flipped', () => {
      const subtract = (a, b) => a - b;
      const invertedSubtract = Func.flip(subtract);
      const invertedPower = Func.flip(Math.pow);
      expect(subtract(2, 5)).to.equal(-3);
      expect(invertedSubtract(2, 5)).to.equal(3);
      expect(invertedPower(2, 5)).to.equal(25);
    });
  });
});
