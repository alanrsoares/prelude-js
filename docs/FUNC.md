# Preλude-js :: Docs :: Func

## Func.curry

```haskell
curry :: (a → b → c) → a → b → c
```

> Returns a curried version of the supplied function.

```javascript
const add = curry((a, b) => a + b);
const inc = add(1);

inc(2); //=> 3
```

## Func.apply

```haskell
apply :: (a → b → c → ... → d) → [a, b, c, ...] → d
```

> Returns the application of the supplied list as arguments to the supplied function.

```javascript
const sum = (a, b) => a + b;
apply(sum, [2, 3]); //=> 5
```

## Func.flip

```haskell
flip :: (a → b → c) → (b → a → c)
```

> Returns a function with the arguments flipped.

```javascript
const invertedPower = flip(Math.pow);
invertedPower(2, 3) //=> 9
```

## Func.fix

```haskell
fix :: (Function → Function) → Function
```

> Fix-point function for anonymous recursion, implemented with the [Y combinator](https://en.wikipedia.org/wiki/Fixed-point_combinator#Y_combinator).

```javascript
fix((fib) => (n) => n <= 1 
      ? 1 
      : fib(n - 1) + fib(n - 2))(9) //=> 55
```

