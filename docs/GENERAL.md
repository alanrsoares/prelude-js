# λ :: General

## General.areSimilar

```haskell
areSimilar :: a → a → Boolean
```

> Performs a deep similarity check across arrays, objects, functions, and primitive values.

```javascript
areSimilar({ foo: ['bar'] }, { foo: ['bar'] }); //=> true
```

## General.deny

```haskell
deny :: a → Boolean
```

> Negates the truthiness of a value.

```javascript
deny(0); //=> true
```

## General.equals

```haskell
equals :: a → a → Boolean
```

> Checks strict equality between two values.

```javascript
equals(2, 2); //=> true
```

## General.fst

```haskell
fst :: [a, b] → a
```

> Returns the first value in a pair.

```javascript
fst(['left', 'right']); //=> 'left'
```

## General.id

```haskell
id :: a → a
```

> Returns the supplied value unchanged.

```javascript
id('foo'); //=> 'foo'
```

## General.not

```haskell
not :: a → Boolean
```

> Negates the truthiness of a value using the canonical Prelude name.

```javascript
not(true); //=> false
```

## General.ofType

```haskell
ofType :: String → a → Boolean
```

> Checks whether a value matches the supplied runtime type name.

```javascript
ofType('Array', []); //=> true
```

## General.replicate

```haskell
replicate :: Number → a → [a]
```

> Builds a list of repeated copies of the supplied value.

```javascript
replicate(3, 'a'); //=> ['a', 'a', 'a']
```

## General.snd

```haskell
snd :: [a, b] → b
```

> Returns the second value in a pair.

```javascript
snd(['left', 'right']); //=> 'right'
```

## General.typeOf

```haskell
typeOf :: Any → String
```

> Returns the internal JavaScript type tag for a value.

```javascript
typeOf([]); //=> 'Array'
```
