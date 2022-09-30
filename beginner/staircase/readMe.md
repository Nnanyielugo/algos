### Staircase

#### Question:

Write a program that prints a staircase of size `n` using `#` symbol and spaces
For instance, `staircase(4)` will print:

```js
   #
  ##
 ###
####
```

#### Explanation

Looking at the expected result, what we're trying to do here is to print a staircase of `n` height and `n` length. `n * n`, if you will. The trick here is to: 1, print `n` rows of `n` length. 2, create a rule that prints either `#` or ` ` in a manner that ends up as our staircase.

#### Solution

**Iteirative solution**

- create a loop with var `row` from 0 to `n-1`.
- create a variable `stair` and initialize to an empty string (no spaces)
- create an inner loop with var `col` from `n-1` to 0.
- if the value of `row` is greater than or equal to the value of `col`, cocatenate `#` to `stair`. Else cocatenate an empty string (with a space) to `stair`.
- at the end off the outer loop, print `stair`

**Recursion**
This is basically `staircase` but with extra steps. Since we cannot keep variables in an outer loop like in the iteirative solution (since the recursive calls means the execution context is wiped clean), we simply pass them as arguments to each call and modify as we want.

- create a function with variables `n`, `row` and `stair`. `row` should initialize as the value of `n`, and `stair` should initialize as an empty string (no spaces)
- create an `exit clause`. We don't want our recursive function to go on forever.
- create a step clause where if the length of `stair` is equal to `n`, print stair and make a recursive call to the function with the value of `n` unchanged, and `row` decremented by 1. Optionally set `stair` to an empty string (not necessary since that's what the function will be called with if that argument is not provided).
- create a stair concatenation clause that is basically an `if-else` clause. If the length of `stair` is greater than or equal to `row-1`, cocatenate `#` to `stair`. Else cocatenate an empty string (with a space) to `stair`.
- make a recursive function call with the arguments left untouched.
