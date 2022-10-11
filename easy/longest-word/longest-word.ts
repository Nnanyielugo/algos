/**
 * Given a sentence, return the longest word in the string
 */

function longestWord(sentence: string) {
  return sentence.split(' ').reduce((acc: string, curr: string) => {
    if (curr.length > acc.length) {
      return curr;
    }
    return acc;
  }, '');
}

console.log(longestWord("Walking talking having breakfast at tiffany's"));
