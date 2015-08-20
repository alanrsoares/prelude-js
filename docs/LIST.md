# λ :: List

## List.each

```haskell
curry :: (a → Undefined) → [a] → [a]
```

> Applies a function to each item in the list and returns the original list. Used for side effects.

```javascript
each((x) => x.push('boom'), [['a'], ['b'], ['c']]);
//=> [['a', 'boom'], ['b', 'boom'], ['c', 'boom']]
```
