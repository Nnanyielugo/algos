### Search and Replace

#### Question

Receiving a sentence, a word in the sentence and a replacement for that word as arguments, perform a search and replace on the sentence using the arguments provided and return the new sentence.

For example: `searchAndReplace("He is Sleeping on the couch", "Sleeping", "sitting")` should return `He is sitting on the couch`

#### Solution

- convert the sentence into an array/list of words
- loop over each `word` in the array of words.
- for each word:
  - compare word with target
  - if word matches target, replace the target word with the replacement
- return the sentence
