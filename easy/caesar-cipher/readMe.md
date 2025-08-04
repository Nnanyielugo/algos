### Caesar Cipher

##### Question:

Write out an algorithm that shifts every letter of a given string by the number that was passed in. The algorithm should account for nagative numbers

For example: `caesarCipher('zoo keeper', 2)` should output `'bqq mggrgt'`

##### Solution:

Although this is a straightforward solution, it is made a little bit complicated by a couple edge cases: negative shifting and when the shift goes beyond the last letter of the alphabet.
Notwithstanding, the steps to solve this are as follows:

- create a constant `alphabets` to hold all the letters of the english alphabets
- get the real shifting index by fetching the remainder of dividing `num` by the number of the alphabets and store in a variable called `shiftingNum`. This handles the case of `num` being greater than the number of alphabets, both for positive and negative numbers.
- convert the string argument to lower case and store in a `lowerStr` variable.
- create an `output` variable and initializze to an empty string (no spaces)
- loop over the characters of `lowerStr`
- for each `char` in `lowerStr`:
  - if the `char` is an empty space, add to `output` and move to the next `char`
  - create an `originIndex` variable and set its value to be the index position of `char` in alphabets. Remember strings and arrays are zero-indexed
  - create a `destinationIndex` variable and initialize its value to the sum of `originIndex` and `shiftingNum`
  - if `destinationIndex` is greater than the number of alphabets (remember zeroIndexed so `destinationIndex` only needs to be greater than 25 to meet this condition), subtract destinationIndex from alphabet length and set to the new value of destinationIndex. By doing so, we simply go round continue the shifting from the begining when it runs out of alphabets to shift
  - if `destinationIndex` is greater than `0`, we add the length of `alphabets` and `destinationIndex` and set that as the new value of `destinationIndex`. This means that chars whose destination position calculate to a negative index are shifted round to the end of the alphabets list. This takes care of negative shifting where the algorithm runs out of `alphabets` to shift to.
  - create a `destinationChar` variable and set its value to the char at `destinationIndex`
  - check that the `destinationChar` is in the same case as it was passed in (ie, upper, lower). If not, transform as needed.
  - add `destinationChar` to `output`
- return `output`
