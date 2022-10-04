### Reverse Array in Place

#### Question

Create a function that reverses an array.
For example: `reverseArrayInPlace([1, 3, 5, 7, 9, 11])` returns `[11, 9, 7, 5, 3, 1]`

It is important that these two rules are kept:

1. Do not create a new array
2. Do not use the native array reverse method

#### Solution

Since we cannot use the native array reverse method and we cannot create a new array, we'll have to use a tecnique commonly used in solving the fibonacci algorithm - the temporary variable method. This can be done in the following steps:

- create a loop from `0` to half the length of the passed in array. This is important because by the time we get to the middle of the array, will have already reversed it. Proceeding to the end will only return it to its original arrangement.
- create a `temp` variable and set it to the value of the item at the current iteiration index (0, 1, 2, ...). This is not necessary in languages that support `multiple assignment`, like `python`.
- create a `swapIndex` variable, and set it to the value of `the length of the array - 1 - the current iteiration index`. (-1 because arrays are 0-indexed and last item in an array is array length - 1, and - current index because the distance between the target and replacement items from the start and end of the array respectively, is represennted by the current index)
- move the item at the `swapIndex` to replace the item at the current index
- move the `temp` variable (remember that its value is the value of the recently replaced item at the current index) to replace the item at the swapIndex
- return the array.
