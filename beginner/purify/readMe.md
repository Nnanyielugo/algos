### Purify

#### Question

Define a function called purify that takes in a list of numbers, removes all odd numbers in the list, and returns the result.
For example, purify([1,2,3]) should return [2].

Do not directly modify the list you are given as input; instead, return a new list with only the even numbers.

#### Solution

- create a `result` empty array
- loop through all the numbers in the input array
- for each number:
  - check if the numbber is divisible by 2 and has no remainders
  - if yes, put the number into `result`
- return `result`
