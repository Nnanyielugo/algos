### Dedupe

##### Question:

Write a function `dedupe` that takes in a list and removes elements of the list that are the same.

For example: `dedupe([1, 1, 2, 2])` should return `[1, 2]`.

Don’t remove every occurrence, since you need to keep a single occurrence of a number.
The order in which you present your output does not matter. So returning `[1, 2, 3]` is the same as returning `[3, 1, 2]`.
Do not modify the list you take as input! Instead, return a new list.

##### Solution:

- create an empty array `result`. This will hold the deduplicated numbers we will return from our function.
- loop through all out input numbers
- for each number:
  - if number does not appear in our `result` array (hence has not been encountered before), add it into `result`.
    return `result`
