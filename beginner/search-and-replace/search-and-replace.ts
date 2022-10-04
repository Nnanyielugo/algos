function searchAndReplace(
  sentence: string,
  target: string,
  replacement: string
): string {
  for (let word of sentence.split(' ')) {
    if (word.toLowerCase() === target.toLowerCase()) {
      return sentence.replace(word, replacement);
    }
  }
  return sentence;
}
