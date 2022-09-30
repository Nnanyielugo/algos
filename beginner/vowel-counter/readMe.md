### Vowel Counter

##### Question:

Given a string of text containing 0 or more vowels, count the number of vowels that can be found within the text.

For instance: `func('abzqhiit')` should return `3`

##### Solution:

This problem can be solved in a number of straight-forward steps:

- initialize a `count` variable and set value to 0
- store all known vowels in a `vowels` variable
- loop through each character in `vowels`
- check if the character is one of the letters in `vowels`
- if yes, increment `count` by one.
- return `count`
