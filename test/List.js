import { expect } from 'chai';
import List from '../src/List';

describe('List.js', () => {
  describe('List.each', () => {
    it('Should apply a function to each item in a list, not returning any value', () => {
      const input = [1, 2, 3, 4, 5];
      const output = [];
      const expected = [2, 3, 4, 5, 6];
      List.each((x) => output.push(++x), input);
      expect(output).to.deep.equal(expected);
    });
    it('Should apply a function to each item in a list, not returning any value, partially', () => {
      const input = [1, 2, 3, 4, 5];
      const output = [];
      const expected = [2, 3, 4, 5, 6];
      List.each((x) => output.push(++x))(input);
      expect(output).to.deep.equal(expected);
    });
  });

  describe('List.map', () => {
    it('Should apply a function to each item in a list, returning a new list with the result', () => {
      const input = [1, 2, 3, 4, 5];
      expect(List.map((x) => ++x, input)).to.deep.equal([2, 3, 4, 5, 6]);
    });
    it('Should apply a function to each item in a list, returning a new list with the result, partially', () => {
      const input = [1, 2, 3, 4, 5];
      expect(List.map((x) => ++x)(input)).to.deep.equal([2, 3, 4, 5, 6]);
    });
  });
});
