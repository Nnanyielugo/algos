### Array Chunking

##### Question:

Write a function that takes an array of strings/numbers as the first argument and a number `size` as the second argument. This function should return a array of sub-arrays of `size` length. If there's a remainder whose length will not be of `size`, stick it into the last sub-array and return with the other sub-arrays.

For Example: `chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)` should return `[[1, 2, 3], [4, 5, 6], [7, 8]]`

##### Solution:

- create a `results` array. This array will hold the sub arrays we want to split the input values into
- loop over the input values
- for each item:
  - create a `chunk` variable and set it to the last item in `results`
  - if `chunk` does not evaluate to a `truthy` value (ie: `undefined`) or if the length of `chunk` is equal to the `size` argument, create a new array with the current item and add to the end of `results`
  - if `chunk` evaluates to a `truthy` value (ie, is an array of `strings`/`numbers`) and the length of `chunk` is less than `size`, add the current item to the end of `chunk`
- return `results`
