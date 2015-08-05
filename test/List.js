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

  describe('List.find', () => {
    const input = [1, 2, 3, 4, 5];
    it('Should return the exact value in a list that satisfies a given predicate', () => {
      expect(List.find((x) => x === 4, input)).to.equal(4);
    });
    it('Should return the first value in a list that satisfies an ambiguous predicate', () => {
      expect(List.find((x) => x > 2, input)).to.equal(3);
    });
    it('Should return undefined when no value in a list satisfies a given predicate', () => {
      expect(List.find((x) => x === 12, input)).to.equal(undefined);
    });
  });

  describe('List.head', () => {
    const input = [1, 2, 3, 4, 5];
    it('Should return the first value in a list', () => {
      expect(List.head(input)).to.equal(1);
    });
  });

  describe('List.first (alias => List.head)', () => {
    const input = [1, 2, 3, 4, 5];
    it('Should return the first value in a list', () => {
      expect(List.first(input)).to.equal(1);
    });
  });

  describe('List.tail', () => {
    const input = [1, 2, 3, 4, 5];
    it('Should return all but the first value in a list', () => {
      expect(List.tail(input)).to.deep.equal([2, 3, 4, 5]);
    });
  });

  describe('List.last', () => {
    const input = [1, 2, 3, 4, 5];
    it('Should return the last value in a list', () => {
      expect(List.last(input)).to.equal(5);
    });
  });

  describe('List.initial', () => {
    const input = [1, 2, 3, 4, 5];
    it('Should return all but the last value in a list', () => {
      expect(List.initial(input)).to.deep.equal([1, 2, 3, 4]);
    });
  });

  describe('List.empty', () => {
    it('Should return true for an empty list', () => {
      expect(List.empty([])).to.equal(true);
    });
    it('Should return false for an non-empty list', () => {
      expect(List.empty([1, 2, 3])).to.equal(false);
    });
  });

  describe('List.reverse', () => {
    const input = [1, 2, 0, 5, 4, 3];
    it('Should return the items in a list in a reversed order', () => {
      expect(List.reverse(input)).to.deep.equal([3, 4, 5, 0, 2, 1]);
      expect(List.reverse(input)).to.deep.equal(input.reverse());
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

  describe('List.foldl', () => {
    it('Should calculate the sum of items in a list', () => {
      const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      expect(List.foldl((x, y) => x + y, 0, input)).to.equal(45);
    });
  });

  describe('List.foldl1', () => {
    it('Should calculate the number of items in a list', () => {
      const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
      expect(List.foldl1((x) => x + 1, input)).to.equal(10);
    });
  });

  describe('List.foldr', () => {
    it('Should concatenate the letters with the initial value', () => {
      const input = ['h', 'e', 'l', 'l'];
      expect(List.foldr((x, y) => x + y, 'o')(input)).to.equal('hello');
    });
  });

  describe('List.foldr1', () => {
    it('Should calculate the number of items in a list', () => {
      const input = [1, 2, 3, 4, 9];
      expect(List.foldr1((x, y) => x - y, input)).to.equal(7);
    });
  });

  describe('List.concat', () => {
    it('Should concatenate a list of lists into one list', () => {
      const input = [[1, 2], [3], [4, 5]];
      expect(List.concat(input)).to.deep.equal([1, 2, 3, 4, 5]);
    });
  });

  describe('List.concatMap', () => {
    it('Should concatenate a list of lists generated by a function, into one list', () => {
      expect(List.concatMap((x) => [`${x}`, x], [1, 2, 3])).to.deep.equal(['1', 1, '2', 2, '3', 3]);
    });
  });

  describe('List.flatten', () => {
    it('Should flatten a list', () => {
      //flatten [1, [[2], 3], [4, [[5]]]] #=> [1, 2, 3, 4, 5]
      const input = [1, [[2], 3], [4, [[5]]]];
      expect(List.flatten(input)).to.deep.equal([1, 2, 3, 4, 5]);
    });
  });
});
