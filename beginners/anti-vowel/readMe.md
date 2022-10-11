### Anti Vowel

##### Question:

Define a function called anti_vowel that takes one string, text, as input and returns the text with all of the vowels removed.
For example: `anti_vowel("Hey You!")` should return `"Hy Y!"`. Don’t count Y as a vowel. Make sure to remove lowercase and uppercase vowels.

##### Solution

- define a `vowels` variable and set its value to be all the vowels in the English alphabet
- create a `result` variable and set it to be an empty string (no spaces)
- loop through all the characters in the passed in text
- for each character:
  - check if the character is a vowel. Remember to account for case sensitivity
  - if character is not a vowel, add it to `result`
- return `result`
