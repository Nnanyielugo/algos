/**
  Create a function that reverses the array passed in.
  It is important that these two rules are kept:
    1. Do not create a new array
    2. Do not use the native array reverse method
 */

function reverseArrayInPlace(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    const temp = arr[i];
    const lastIndex = arr.length - 1 - i;
    arr[i] = arr[lastIndex];
    arr[lastIndex] = temp;
  }
  return arr;
}

console.log(reverseArrayInPlace([1, 3, 5, 7, 9]));
console.log(reverseArrayInPlace([1, 3, 5, 7, 9, 11]));
