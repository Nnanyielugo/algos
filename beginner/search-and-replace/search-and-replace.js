function searchAndReplace(sentence, target, replacement) {
  for (word of sentence.split(' ')) {
    if (word.toLowerCase() === target.toLowerCase()) {
      return sentence.replace(word, replacement);
    }
  }
  return sentence;
}
