import { expect } from 'chai';
import deepFreeze from 'deep-freeze'
import * as List from '../src/List';
import { get } from '../src/Obj';
import { id } from '../src/General';
import { Case, run } from './cases';

describe('List.js', () => {
  describe('List.range', () => {
    it('Should return a list of numbers according to the given boundaries', () => {
      expect(List.range(0)).to.deep.equal([]);
      expect(List.range(1)).to.deep.equal([1]);
      expect(List.range(3)).to.deep.equal([1, 2, 3]);
      expect(List.range(10, 8)).to.deep.equal([8, 9, 10]);
      expect(List.range(100, 50).length).to.equal(51);
    });
  });

  describe('List.each', () => {
    it('Should apply a function to each item in a list, not returning any value', () => {
      const input = [1, 2, 3, 4, 5];
      const output = [];
      const expected = [2, 3, 4, 5, 6];

      deepFreeze(input);
      deepFreeze(List.each);

      List.each((x) => output.push(++x), input);
      expect(output).to.deep.equal(expected);
    });
  });

  describe('List.map', () => {
    it('Should apply a function to each item in a list, returning a new list with the result', () => {
      run(List.map,
        Case([(x) => ++x, [1, 2, 3, 4, 5]], [2, 3, 4, 5, 6]),
        Case([(x) => --x, [2, 3, 4, 5, 6]], [1, 2, 3, 4, 5]),
        Case([(x) => x * 2, [1, 2, 3, 4, 5]], [2, 4, 6, 8, 10])
      );
    });
  });

  describe('List.compact', () => {
    it('Should return a list of truthy values in a list', () => {
      const input = [0, true, 1, 2, false, 4, 5];
      const expected = [true, 1, 2, 4, 5];

      deepFreeze(input);
      deepFreeze(List.compact);

      expect(List.compact(input)).to.deep.equal(expected);
    });
  });

  describe('List.filter', () => {
    it('Should return the values in a list that satisfy a given predicate', () => {
      const input = [0, 1, 2, 3, 4, 5];
      const expected = [4, 5];

      deepFreeze(input);
      deepFreeze(List.filter);

      expect(List.filter((x) => x > 3, input)).to.deep.equal(expected);
    });
  });

  describe('List.reject', () => {
    it('Should return the values in a list that doesn\'t satisfy the given predicate', () => {
      const input = [0, true, 1, 2, false, 4, 5];
      const expected = [0, false];

      deepFreeze(input);
      deepFreeze(List.reject);

      expect(List.reject((x) => x, input)).to.deep.equal(expected);
    });
  });

  describe('List.partition', () => {
    it('Should return a list with two lists containing the passed and failed values given a predicate', () => {
      const input = [0, true, 1, 2, false, 4, 5];

      deepFreeze(input);
      deepFreeze(List.partition);

      expect(List.partition((x) => x, input)).to.deep.equal([[true, 1, 2, 4, 5], [0, false]]);
    });
  });

  describe('List.find', () => {
    const input = [1, 2, 3, 4, 5];

    deepFreeze(input);
    deepFreeze(List.find);

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

    deepFreeze(input);
    deepFreeze(List.head);

    it('Should return the first value in a list', () => {
      expect(List.head(input)).to.equal(1);
    });
  });

  describe('List.first (alias => List.head)', () => {
    const input = [1, 2, 3, 4, 5];

    deepFreeze(input);
    deepFreeze(List.first);

    it('Should return the first value in a list', () => {
      expect(List.first(input)).to.equal(1);
    });
  });

  describe('List.tail', () => {
    const input = [1, 2, 3, 4, 5];

    deepFreeze(input);
    deepFreeze(List.tail);

    it('Should return all but the first value in a list', () => {
      expect(List.tail(input)).to.deep.equal([2, 3, 4, 5]);
    });
  });

  describe('List.last', () => {
    const input = [1, 2, 3, 4, 5];

    deepFreeze(input);
    deepFreeze(List.last);

    it('Should return the last value in a list', () => {
      expect(List.last(input)).to.equal(5);
    });
  });

  describe('List.initial', () => {
    const input = [1, 2, 3, 4, 5];

    deepFreeze(input);
    deepFreeze(List.initial);

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

    deepFreeze(input);
    deepFreeze(List.reverse);

    it('Should return the items in a list in a reversed order', () => {
      expect(List.reverse(input)).to.deep.equal([3, 4, 5, 0, 2, 1]);
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

      deepFreeze(input);
      deepFreeze(List.uniqueBy);

      expect(List.uniqueBy((x) => x.color, input)).to.deep.equal(['orange', 'green', 'blue']);
    });
  });

  describe('List.unique', () => {
    it('Should find the unique items in a list', () => {
      const input = [1, 2, 3, 2, 2, 1, 3, 2, 0, 9];

      deepFreeze(input);
      deepFreeze(List.unique);

      expect(List.unique(input)).to.deep.equal([1, 2, 3, 0, 9]);
    });
  });

  describe('List.foldl', () => {
    it('Should calculate the sum of items in a list', () => {
      const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      deepFreeze(input);
      deepFreeze(List.foldl);

      expect(List.foldl((x, y) => x + y, 0, input)).to.equal(45);
      expect(List.fold((x, y) => x + y, 0, input)).to.equal(45);
    });
  });

  describe('List.foldl1', () => {
    it('Should calculate the number of items in a list', () => {
      const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

      deepFreeze(input);
      deepFreeze(List.foldl1);

      expect(List.foldl1((x) => x + 1, input)).to.equal(10);
      expect(List.fold1((x) => x + 1, input)).to.equal(10);
    });
  });

  describe('List.foldr', () => {
    it('Should concatenate the letters with the initial value', () => {
      const input = ['h', 'e', 'l', 'l'];

      deepFreeze(input);
      deepFreeze(List.foldr);

      expect(List.foldr((x, y) => x + y, 'o')(input)).to.equal('hello');
    });
  });

  describe('List.foldr1', () => {
    it('Should calculate the number of items in a list', () => {
      const input = [1, 2, 3, 4, 9];

      deepFreeze(input);
      deepFreeze(List.foldr1);

      expect(List.foldr1((x, y) => x - y, input)).to.equal(7);
    });
  });

  describe('List.concat', () => {
    it('Should concatenate a list of lists into one list', () => {
      const input = [[1, 2], [3], [4, 5]];

      deepFreeze(input);
      deepFreeze(List.concat);

      expect(List.concat(input)).to.deep.equal([1, 2, 3, 4, 5]);
    });
  });

  describe('List.concatMap', () => {
    it('Should concatenate a list of lists generated by a function, into one list', () => {

      const input = [1, 2, 3];

      deepFreeze(input);
      deepFreeze(List.concatMap);

      expect(List.concatMap((x) => [`${x}`, x], input)).to.deep.equal(['1', 1, '2', 2, '3', 3]);
      expect(List.concatMap((x) => [x, x], input)).to.deep.equal([1, 1, 2, 2, 3, 3]);
    });
  });

  describe('List.flatten', () => {
    it('Should flatten a list', () => {
      const input = [1, [[2], 3], [4, [[5]]]];

      deepFreeze(input);
      deepFreeze(List.flatten);

      expect(List.flatten(input)).to.deep.equal([1, 2, 3, 4, 5]);
    });
  });

  describe('List.difference', () => {
    it('Should calculate the difference between lists', () => {
      expect(List.difference([1, 2, 3, 4], [1], [4])).to.deep.equal([2, 3]);
      expect(List.difference([1, 2, 3], [2, 1, 3], [3, 1, 2])).to.deep.equal([]);
      expect(List.difference([1, 2, 3], [101, 2, 1, 10], [2, 1], [-1, 0, 1, 2])).to.deep.equal([3]);
      expect(List.difference([1, 2, 3, 4, 5], [5, 2, 10], [9])).to.deep.equal([1, 3, 4]);
    });
  });

  describe('List.intersection', () => {
    it('Should calculate the intersection between lists', () => {
      expect(List.intersection([1, 2, 3], [2, 1, 3], [3, 1, 2])).to.deep.equal([1, 2, 3]);
      expect(List.intersection([1, 2, 3], [101, 2, 1, 10], [2, 1], [-1, 0, 1, 2])).to.deep.equal([1, 2]);
      expect(List.intersection([2, 3], [9, 8], [12, 1], [99])).to.deep.equal([]);
    });
  });

  describe('List.union', () => {
    const cases = [
      { input: [[1, 2, 3, 4], [2, 4, 5], [9], []], expected: [1, 2, 3, 4, 5, 9] },
      { input: [[1, 5, 7], [3, 5], []], expected: [1, 5, 7, 3] }
    ];

    it('Should calculate the union between lists', () => {
      cases.forEach(({ input, expected }) => {
        expect(List.union(...input)).to.deep.equal(expected);
      });
    });
  });

  describe('List.countBy', () => {
    const cases = [
      { input: [4.2, 4.4, 9.8], predicate: Math.floor, expected: { 4: 2, 9: 1 } },
      { input: ['foo', 'bar', 'burp'], predicate: get('length'), expected: { 3: 2, 4: 1 } },
      { input: [-3, 1, 2, 3, 4, 5], predicate: (x) => x > 2, expected: { true: 3, false: 3 } }
    ];

    deepFreeze(cases);
    deepFreeze(List.countBy);

    it('Should count the occurences by a given predicate', () => {
      cases.forEach(({ input, predicate, expected }) => {
        expect(List.countBy(predicate, input)).to.deep.equal(expected);
      });
    });
  });

  describe('List.groupBy', () => {
    it('Should group the matching results by a given predicate', () => {
      expect(List.groupBy(Math.floor, [4.2, 4.4, 9.8])).to.deep.equal({ 4: [4.2, 4.4], 9: [9.8] });
      expect(List.groupBy(get('length'), ['one', 'two', 'three'])).to.deep.equal({ 3: ['one', 'two'], 5: ['three'] });
      expect(List.groupBy((x) => x > 2, [-3, 1, 2, 3, 4, 5])).to.deep.equal({ true: [3, 4, 5], false: [-3, 1, 2] });
    });
  });

  describe('List.and', () => {
    it('Should return false if any item in the list is false, otherwise returns true', () => {
      const neither = (xs, y) => List.and(xs.map(x => x !== y));
      expect(neither([1, 2], 2)).to.equal(false);
      expect(neither([1, 2], 3)).to.equal(true);
      expect(List.and([1, 2, 3])).to.equal(true);
      expect(List.and([3, 2, false])).to.equal(false);
    });
  });

  describe('List.or', () => {
    it('Should return true if any item in the list is true, otherwise returns false', () => {
      const either = (xs, y) => List.or(xs.map(x => x === y));
      expect(either([1, 2], 2)).to.equal(true);
      expect(either([1, 2], 3)).to.equal(false);
      expect(List.or([1, 2, 3])).to.deep.equal(true);
      expect(List.or([0, '', null, false])).to.equal(false);
    });
  });

  describe('List.any', () => {
    it('Should return true true on the first item that satisfies the predicate', () => {
      expect(List.any((x) => x > 2, [1, 2, 3])).to.equal(true);
      expect(List.any((x) => x.length > 3, ['foo', 'bar', 'buzz'])).to.deep.equal(true);
      expect(List.any((x) => x.length < 3, ['foo', 'bar', 'buzz'])).to.deep.equal(false);
    });
  });

  describe('List.all', () => {
    it('Should return true true on the first item that does not satisfy the predicate', () => {
      expect(List.all((x) => x, [1, 2, 3])).to.equal(false);
      expect(List.all((x) => x.length > 3, ['foo', 'bar', 'buzz'])).to.equal(false);
    });
  });

  describe('List.sort', () => {
    it('Sorts a list without modifying the input.', () => {
      expect(List.sort([1, 3, 2])).to.deep.equal([1, 2, 3]);
      expect(List.sort([1, 3, 2, 0])).to.deep.equal([0, 1, 2, 3]);
    });
  });

  describe('List.sortWith', () => {
    it('Should sort a list with a custom binary predicate.', () => {
      const sorter = (x, y) => x.length > y.length ? 1 : x.length < y.length ? -1 : 0;
      expect(List.sortWith(sorter, ['three', 'one', 'two'])).to.deep.equal(['one', 'two', 'three']);
    });
  });

  describe('List.sortBy', () => {
    it('Should sort a list with a custom property-accessor predicate.', () => {
      expect(List.sortBy(get('length'), ['three', 'one', 'two'])).to.deep.equal(['one', 'two', 'three']);
    });
  });

  describe('List.sum', () => {
    it('Should return the sum of a list of numbers.', () => {
      expect(List.sum([1, 2, 3, 4, 5])).to.equal(15);
    });
  });

  describe('List.product', () => {
    it('Should return the product of all items in a list of numbers.', () => {
      expect(List.product([1, 2, 3])).to.equal(6);
    });
  });

  describe('List.mean', () => {
    it('Should return the mean/average of all items in a list of numbers.', () => {
      expect(List.mean([1, 2, 3, 4, 5])).to.equal(3);
    });
  });

  describe('List.maximum', () => {
    it('Should return the maximum value of all items in a list of comparables.', () => {
      expect(List.maximum([1, 2, 3, 4, 5])).to.equal(5);
      expect(List.maximum([-1, -2, -3, -4, -5])).to.equal(-1);
      expect(List.maximum(['1', '3', '2'])).to.equal('3');
      expect(List.maximum(['a', 'c', 'b'])).to.equal('c');
      expect(List.maximum(['w', 'c', 'b'])).to.equal('w');
    });
  });

  describe('List.minimum', () => {
    it('Should return the minimum value of all items in a list of comparables.', () => {
      expect(List.minimum([1, 2, 3, 4, 5])).to.equal(1);
      expect(List.minimum([-1, -2, -3, -4, -5])).to.equal(-5);
      expect(List.minimum(['1', '3', '2'])).to.equal('1');
      expect(List.minimum(['a', 'c', 'b'])).to.equal('a');
      expect(List.minimum(['w', 'c', 'b'])).to.equal('b');
    });
  });

  describe('List.maximumBy', () => {
    it('Should return the item with the maximum value resulting from applying a predicate.', () => {
      expect(List.maximumBy(x => x, [1, 2, 3, 4, 5])).to.equal(5);
      expect(List.maximumBy(x => x, [-1, -2, -3, -4, -5])).to.equal(-1);
      expect(List.maximumBy(x => x, ['1', '3', '2'])).to.equal('3');
      expect(List.maximumBy(x => x, ['a', 'c', 'b'])).to.equal('c');
      expect(List.maximumBy(x => x, ['w', 'c', 'b'])).to.equal('w');
    });
  });

  describe('List.minimumBy', () => {
    it('Should return the item with the minimum value resulting from applying a predicate.', () => {
      expect(List.minimumBy(x => x, [1, 2, 3, 4, 5])).to.equal(1);
      expect(List.minimumBy(x => x, [-1, -2, -3, -4, -5])).to.equal(-5);
      expect(List.minimumBy(x => x, ['1', '3', '2'])).to.equal('1');
      expect(List.minimumBy(x => x, ['a', 'c', 'b'])).to.equal('a');
      expect(List.minimumBy(x => x, ['w', 'c', 'b'])).to.equal('b');
      expect(List.minimumBy(get('length'), ['was', 'a', 'test'])).to.equal('a');
    });
  });

  describe('List.scan', () => {
    it('Should return a list composed of the initial value, the intermediate values, and then the final value.', () => {
      const sum = (a, b) => a + b;
      const mult = (a, b) => a * b;

      expect(List.scan(sum, 0, [1, 2, 3])).to.deep.equal([0, 1, 3, 6]);
      expect(List.scan(mult, 1, [2, 3, 4])).to.deep.equal([1, 2, 6, 24]);
      expect(List.scanl(sum, 0, [1, 2, 3])).to.deep.equal([0, 1, 3, 6]);
      expect(List.scanl(mult, 1, [2, 3, 4])).to.deep.equal([1, 2, 6, 24]);

    });
  });

  describe('List.scan1', () => {
    it('Should return a list composed of the initial value, the intermediate values, and then the final value.', () => {
      const sum = (a, b) => a + b;
      const mult = (a, b) => a * b;

      expect(List.scan1(sum, [1, 2, 3])).to.deep.equal([1, 3, 6]);
      expect(List.scan1(mult, [1, 2, 3])).to.deep.equal([1, 2, 6]);
      expect(List.scan1(mult, [])).to.deep.equal(undefined);
      expect(List.scanl1(sum, [1, 2, 3])).to.deep.equal([1, 3, 6]);
      expect(List.scanl1(mult, [1, 2, 3])).to.deep.equal([1, 2, 6]);
      expect(List.scanl1(mult, [])).to.deep.equal(undefined);

    });
  });

  describe('List.take', () => {
    it('Should take the first n elements of a list', () => {
      const input = [2, 3, 5, 8, 1, 0, 9];

      deepFreeze(input);
      deepFreeze(List.take);

      expect(List.take(2, input)).to.deep.equal([2, 3]);
      expect(List.take(3, input)).to.deep.equal([2, 3, 5]);
      expect(List.take(1, input)).to.deep.equal([2]);
      expect(List.take(0, input)).to.deep.equal([]);
      expect(List.take(null, input)).to.deep.equal([]);
      expect(List.take(4, input)).to.deep.equal([2, 3, 5, 8]);
    });
  });

  describe('List.takeWhile', () => {
    it('Should take the first n elements that satisfy the given predicate', () => {
      const input = [2, 3, 5, 8, 1, 0, 9];

      deepFreeze(input);
      deepFreeze(List.takeWhile);

      expect(List.takeWhile((n) => n <= 3, input)).to.deep.equal([2, 3]);
    });
  });

  describe('List.drop', () => {
    it('Should drop the first n elements of a list', () => {
      const input = [2, 3, 5, 8, 1, 0, 9];

      deepFreeze(input);
      deepFreeze(List.drop);

      expect(List.drop(2, input)).to.deep.equal([5, 8, 1, 0, 9]);
      expect(List.drop(3, input)).to.deep.equal([8, 1, 0, 9]);
      expect(List.drop(1, input)).to.deep.equal([3, 5, 8, 1, 0, 9]);
      expect(List.drop(0, input)).to.deep.equal(input);
      expect(List.drop(null, input)).to.deep.equal(input);
      expect(List.drop(4, input)).to.deep.equal([1, 0, 9]);
    });
  });

  describe('List.dropWhile', () => {
    it('Should drop the first n elements that satisfy the given predicate', () => {
      const input = [2, 3, 5, 8, 1, 0, 9];

      deepFreeze(input);
      deepFreeze(List.dropWhile);

      expect(List.dropWhile((n) => n <= 3, input)).to.deep.equal([5, 8, 1, 0, 9]);
    });
  });

  describe('List.zip', () => {
    it('Should zip together its two arguments into a list of lists. ', () => {
      run(List.zip,
        Case([[], []], []),
        Case([[1, 2], [4, 5]], [[1, 4], [2, 5]]),
        Case([[1, 2], [4, 5, 6]], [[1, 4], [2, 5]]),
        Case([[1, 2, 3], [4, 5]], [[1, 4], [2, 5]])
      );
      expect(List.zip([1, 2, 3])([4, 5])).to.deep.equal([[1, 4], [2, 5]]);
    });
  });

  describe('List.zipWith', () => {
    const sum = (a, b) => a + b;

    it('Should zipWith together its two arguments into a list of lists. ', () => {
      run(List.zipWith,
        Case([id, [], []], []),
        Case([sum, [1, 2, 3], [3, 2, 1]], [4, 4, 4])
      );
      expect(List.zipWith(id)([], [])).to.deep.equal([]);
    });
  })
});
