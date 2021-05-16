function isAnagram(word1: string, word2: string): boolean {
  if (word1.length !== word2.length) {
    return false;
  }
  const sorted1 = word1.toLowerCase().split('').sort().join('');
  const sorted2 = word2.toLowerCase().split('').sort().join('');
  return sorted1 === sorted2;
}

interface CharMap {
  [key: string]: number;
}

function isAnagramCharMap(word1: string, word2: string): boolean {
  if (word1.length !== word2.length) {
    return false;
  }

  function createCharMap(text: string): CharMap {
    const charMap: CharMap = {};

    for (let char of text) {
      if (!charMap[char]) {
        charMap[char] = 1;
      } else {
        charMap[char]++;
      }
    }

    return charMap;
  }

  const word1CharMap = createCharMap(word1);
  const word2CharMap = createCharMap(word2);

  for (let char in word1CharMap) {
    const word1CharCount = word1CharMap[char];
    const word2CharCount = word2CharMap[char];
    if (!word2CharCount || word2CharCount !== word1CharCount) {
      return false;
    }
  }

  return true;
}

console.log(isAnagramCharMap('silent', 'listen'));
console.log(isAnagramCharMap('seen', 'needless'));
console.log(isAnagramCharMap('two', 'far'));
