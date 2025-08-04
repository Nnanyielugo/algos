function searchAndReplace(sentence, target, replacement) {
  for (let word of sentence.split(' ')) {
    if (word.toLowerCase() === target.toLowerCase()) {
      return sentence.replace(word, replacement);
    }
  }
  return sentence;
}
