### Scrabble Score

#### Question

Define a function scrabble_score that takes a string word as input and returns the equivalent scrabble score for that word.

Assume your input is only one word containing no spaces or punctuation.
As mentioned, no need to worry about score multipliers!
Your function should work even if the letters you get are uppercase, lowercase, or a mix.
Assume that you’re only given non-empty strings.

For example: `scrabble_score('flute')` should return `8`

#### Solution

We are already provided with a `score` character map that associates each letter of the alphabet with its score.

- intialize a `result` variable and set its value to `0`
- loop over the characters in the input word (optionally convert to lowercase to handle uppercase or mixed characters)
- fetch the value of the character.
- if value exists, add to `result`
- return result
