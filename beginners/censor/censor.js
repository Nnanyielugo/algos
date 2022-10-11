function censor(text, word) {
  const result = [];
  const wordArray = text.split(' ');

  for (let wordItem of wordArray) {
    if (wordItem === word) {
      const censorWord = '*'.repeat(word.length);
      result.push(censorWord);
    } else {
      result.push(wordItem);
    }
  }
  return result.join(' ');
}
