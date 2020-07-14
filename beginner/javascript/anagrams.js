function isAnagram (word1, word2) {
  if (word1.length !== word2.length) {
    return false
  }

  const word1Rearr = word1.split('').sort().join('').toLowerCase()
  const word2Rearr = word2.split('').sort().join('').toLowerCase()
  return word1Rearr === word2Rearr
}

function isAnagramWCharMap(word1, word2) {
  if (word1.length !== word2.length) {
    return false
  }

  function createCharMap (text) {
    const charMap = {};
    for(let char of text) {
      if (!charMap[char]) {
        charMap[char] = 1;
      } else {
        charMap[char]++
      }
      
    }
    return charMap
  }

  const word1CharMap = createCharMap(word1);
  const word2CharMap = createCharMap(word2)

  for(let char in word1CharMap) {
    if (word1CharMap[char] !== word2CharMap[char]) {
      return false
    }
  }
  return true
}

console.log(isAnagramWCharMap('silent', 'listen'))
console.log(isAnagramWCharMap('two', 'far'))
console.log(isAnagramWCharMap('tell', 'sell'))
console.log(isAnagramWCharMap('seen', 'needless'))