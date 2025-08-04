### Digit Sum

##### Question:

Write a function called digit_sum that takes a positive integer n as input and returns the sum of all that number’s digits.
For example: `digit_sum(1234)` should return `10` which is `1 + 2 + 3 + 4`.
(Assume that the number you are given will always be positive.)

##### Solution:

Looking at this, it is immediately obbvious that we will have to separate the numbers into individual digits in order to arrive at our solution.
The steps to solve this problem are as follows:

- create a `total` variable and initialize as zero
- convert the input to string
- loop over the stringified characters of the converted input
- for each `char`:
  - convert `char` back to number
  - add converted char to `total`
- return `total`
