import { expect } from 'chai';
import * as Num from '../src/Num';

describe('Num.js', () => {
  describe('Num.add', () => {
    it('Should add two values', () => {
      expect(Num.add(1, 2)).to.equal(3);
      expect(Num.add(-1, 2)).to.equal(1);
      expect(Num.add('foo', 2)).to.equal('foo2');
      expect(Num.add('foo', 'bar')).to.equal('foobar');
      expect(Num.add(null, undefined)).to.deep.equal(NaN);
      expect(Num.add(null, null)).to.equal(0);
      expect(Num.add(undefined, undefined)).to.deep.equal(NaN);
    })
  });
});
