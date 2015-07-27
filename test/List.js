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
  });

  describe('List.map', () => {
    it('Should apply a function to each item in a list, returning a new list with the result', () => {
      const input = [1, 2, 3, 4, 5];
      expect(List.map((x) => ++x, input)).to.deep.equal([2, 3, 4, 5, 6]);
      expect(List.map((x) => ++x)(input)).to.deep.equal([2, 3, 4, 5, 6]);
    });
  });

  describe('List.compact', () => {
    it('Should return a list of truthy values in a list', () => {
      const input = [0, true, 1, 2, false, 4, 5];
      expect(List.compact(input)).to.deep.equal([true, 1, 2, 4, 5]);
    });
  });

  describe('List.filter', () => {
    it('Should return the values in a list that satisfy a given predicate', () => {
      const input = [0, 1, 2, 3, 4, 5];
      expect(List.filter((x) => x > 3, input)).to.deep.equal([4, 5]);
    });
  });

  describe('List.reject', () => {
    it('Should return the values in a list that doesn\'t satisfy the given predicate', () => {
      const input = [0, true, 1, 2, false, 4, 5];
      expect(List.reject((x) => x, input)).to.deep.equal([0, false]);
    });
  });

  describe('List.partition', () => {
    it('Should return a list with two lists containing the passed and failed values given a predicate', () => {
      const input = [0, true, 1, 2, false, 4, 5];
      expect(List.partition((x) => x, input)).to.deep.equal([[true, 1, 2, 4, 5], [0, false]]);
    });
  });

  describe('List.uniqueBy', () => {
    it('Should find the unique items in a list given a predicate', () => {
      const input = [
        { color: 'orange' },
        { color: 'green' },
        { color: 'orange' },
        { color: 'blue' },
        { color: 'green' },
        { color: 'orange' }
      ];
      expect(List.uniqueBy((x) => x.color, input)).to.deep.equal(['orange', 'green', 'blue']);
    });
  });

  describe('List.unique', () => {
    it('Should find the unique items in a list', () => {
      const input = [1, 2, 3, 2, 2, 1, 3, 2, 0, 9];
      expect(List.unique(input)).to.deep.equal([1, 2, 3, 0, 9]);
    });
  });
});
