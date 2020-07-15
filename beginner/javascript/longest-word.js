/**
 * Given a sentence, return the longest word in the string
 */

function longestWord(sentence) {
  return sentence.split(' ').reduce((acc, curr) => {
    if (curr.length > acc.length) {
      return curr
    }
    return acc
  }, [])
}

console.log(longestWord('Walking talking having breakfast at tiffany\'s '))