# λ :: List

## List.each

```haskell
each :: (a → Undefined) → [a] → [a]
```

> Applies a function to each item in the list and returns the original list. Used for side effects.

```javascript
each((x) => x.push('boom'), [['a'], ['b'], ['c']]);
//=> [['a', 'boom'], ['b', 'boom'], ['c', 'boom']]
```

## List.map

```haskell
map :: (a → b) → [a] → [b]
```

> Applies a function to each item in the list, and produces a new list with the results. The length of the result is the same length as the input.

```javascript
map((x) => x + 1, [1, 2, 3]);
//=> [2, 3, 4]
```
