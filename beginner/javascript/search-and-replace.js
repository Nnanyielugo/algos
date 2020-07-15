/**
 * Receiving a sentence, a word in the sentence and a replacement for that word as arguments, 
 * perform a search and replace on the sentence using the arguments provided and return the new sentence.
 */

 function searchAndReplace(sentence, target, replacement) {
  for (word of sentence.split(' ')) {
    if (word.toLowerCase() === target.toLowerCase()) {
      return sentence.replace(word, replacement)
    }
  }
  return sentence
 }
 
 console.log(searchAndReplace("He is Sleeping on the couch", "Sleeping", "sitting"))