### Censor

##### Question:

Write a function called censor that takes two strings, text and word, as input.
It should return the text with the word you chose replaced with asterisks. For example: `censor("this hack is wack hack", "hack")` should return `this **** is wack ****`

Assume your input strings won’t contain punctuation or upper case letters.
The number of asterisks you put should correspond to the number of letters in the censored word.

##### Solution:

- create a `result` variable and set to be an empty array
- create an of all the words in the input sentence split by an empty space. Maybe name it `wordArray`
- for each `item` in `wordArray`:
  - if `item` is equal to target word, replace item with astericks
  - put `item` into `result`
- convert `result` into a string
- return `result`
