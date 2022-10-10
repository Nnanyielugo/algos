### Capitalize

##### Question:

Write a function that takes a sentence, capitalizes the words of the sentence (first letter of all the words), and returns the transformed sentence.

For example: `capitalize("a short sentence")` should return `A Short Sentence`

##### Solution:

- create an array made up of words in that sentence that are split by blank spaces. Name it whatever you want, `wordArr` for example
- create a `result` variable and initialize as an empty array.
- loop over each word in `wordArr`
- for each word:
  - transform the first letter to upper case.
  - push the trannsformed word into `result`
- convert `result` to a string
- return result
