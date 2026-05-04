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

## List.elem

```haskell
elem :: a → [a] → Boolean
```

> Checks whether a list contains a given value.

```javascript
elem(3, [1, 2, 3]); //=> true
```

## List.length

```haskell
length :: [a] → Number
```

> Returns the number of items in a list.

```javascript
length([1, 2, 3]); //=> 3
```

## List.notElem

```haskell
notElem :: a → [a] → Boolean
```

> Checks whether a list does not contain a given value.

```javascript
notElem(4, [1, 2, 3]); //=> true
```
