# λ :: Func

## Func.curry

```haskell
curry :: (a → b → c → ... → d) → a → b → c → ... → d
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
invertedPower(2, 3); //=> 9
```

## Func.fix

```haskell
fix :: (Function → Function) → Function
```

> Fix-point function for anonymous recursion, implemented with the [Y combinator](https://en.wikipedia.org/wiki/Fixed-point_combinator#Y_combinator).

```javascript
fix((fib) => (n) => n <= 1
      ? 1
      : fib(n - 1) + fib(n - 2))(9); //=> 55
```

## Func.memoize

```haskell
memoize :: Function → Function
```

> Caches computed results, speeding up later calls with the same arguments.

```javascript
const memoF = memoize(expensiveFunction);
memoF(2) // slow, but result is then cached
memoF(2) // fast
```

## Func.deny

```haskell
deny :: Function → Function
```

> Denies the result of a predicate function

```javascript
const gt2 = (x) => x > 2;
const twoOrLess = deny(gt2);
gt2(2); //=> false
twoOrLess(2); //=> true
```

## Func.compose

```haskell
compose :: ((y → z), (x → y), …, (o → p), ((a, b, …, n) → o)) → (a → b → … → n → z)
```

> Performs right-to-left function composition. The rightmost function may have any arity; the remaining functions must be unary.

```javascript
const plus1 = (x) => x + 1;
const negate = (x) => -x;
const complex = compose(plus1, negate, Math.pow);

complex(3, 2) === plus1(negate(Math.pow(3, 2)));
```
