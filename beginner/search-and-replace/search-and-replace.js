function searchAndReplace(sentence, target, replacement) {
  for (word of sentence.split(' ')) {
    if (word.toLowerCase() === target.toLowerCase()) {
      return sentence.replace(word, replacement);
    }
  }
  return sentence;
}

console.log(
  searchAndReplace('He is Sleeping on the couch', 'Sleeping', 'sitting')
);
