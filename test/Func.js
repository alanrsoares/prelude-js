import { expect } from 'chai';
import * as Func from '../src/Func';

describe('Func.js', () => {
  describe('Func.curry', () => {
    it('Should allow partial application of a function', () => {
      const sum = Func.curry((a, b) => a + b);
      const increment = sum(1);
      expect(sum(1, 2)).to.equal(3);
      expect(sum(3)(2)).to.equal(5);
      expect(increment(1)).to.equal(2);
    });
  });

  describe('Func.apply', () => {
    it('Should return the application of the supplied list as arguments to the supplied function', () => {
      const sum = Func.curry((a, b) => a + b);
      const sumAll = (...xs) => xs.reduce(sum);
      expect(Func.apply(sum, [2, 3])).to.equal(5);
      expect(Func.apply(sumAll, [1, 2, 3, 4, 5])).to.equal(15);
    });
  });

  describe('Func.fix', () => {
    it('Should run a recursive-ready inline function', () => {
      const fiftyFive = Func.fix((fib) => (n) => n <= 1 ? 1 : fib(n - 1) + fib(n - 2))(9);
      expect(fiftyFive).to.equal(55);
    });
  });

  describe('Func.flip', () => {
    it('Should return a function with the arguments flipped', () => {
      const subtract = (a, b) => a - b;
      const invertedSubtract = Func.flip(subtract);
      const invertedPower = Func.flip(Math.pow);
      expect(subtract(2, 5)).to.equal(-3);
      expect(invertedSubtract(2, 5)).to.equal(3);
      expect(invertedPower(2, 5)).to.equal(25);
    });
  });

  describe('Func.memoize', () => {
    it('Should call a memoized function only once', () => {
      let called = 0;
      const length = (x) => ++called && x.length;
      const memoLength = Func.memoize(length);
      const cases = ['foo', 'bar', 'baz', 'buzz'];

      cases.map((word, k) => {
        for (let i = 0; i <= k; i++) {
          memoLength(word);
        }
      });

      expect(called).to.equal(cases.length);
    });
  });

  describe('Func.compose', () => {
    it('Should compose multiple functions into one', () => {
      const plus1 = (x) => x + 1;
      const negate = (x) => -x;
      const complex = Func.compose(plus1, negate, Math.pow);

      expect(complex(3, 2)).to.equal(plus1(negate(Math.pow(3, 2))));
    });
  });

  describe('Func.deny', () => {
    it('Should deny the result of a function', () => {
      const gt2 = (x) => x > 2;
      const twoOrLess = Func.deny(gt2);
      expect(gt2(2)).to.equal(false);
      expect(twoOrLess(2)).to.equal(true);
    });
  });

});
