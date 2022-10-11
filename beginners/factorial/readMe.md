### Factorial

##### Question:

Define a function factorial that takes an integer x as input.

Calculate and return the factorial of that number.
For example: `factorial(7)` should return `5040`

##### Solution:

This solution is basically a series of simple multiplication to arrive at pour desired answer. The steps to do this are as follows:

- create a `total` variable and initialize as `1`
- if the input is equal to or less than `1`, return `1`
- create a loop from `1` to the input number
- for each number:
  - multiply the number by `total` and set the result of that multiplication as the new value of `total`
- return `total`
