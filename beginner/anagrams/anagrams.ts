function isAnagram(word1: string, word2: string): boolean {
  if (word1.length !== word2.length) {
    return false;
  }
  const sorted1 = word1.toLowerCase().split('').sort().join('');
  const sorted2 = word2.toLowerCase().split('').sort().join('');
  return sorted1 === sorted2;
}

interface CharMap {
  [char: string]: number;
}
function anagrams(stringA: string, stringB: string): boolean {
  if (stringA.length !== stringB.length) {
    return false;
  }
  interface CharMap {
    [char: string]: number;
  }
  const charMapA: CharMap = cleanedCharaMap(stringA);
  const charMapB: CharMap = cleanedCharaMap(stringB);

  for (let char in charMapA) {
    if (charMapA[char] !== charMapB[char]) {
      return false;
    }
  }

  return true;
}

console.log(anagrams('rail safety', 'fairy tales'));
console.log(anagrams('RAIL! SAFETY!', 'fairy tales'));
console.log(anagrams('hi there', 'bye there'));

function cleanedCharaMap(str: string): CharMap {
  const charMap: CharMap = {};
  const isValidAlphs = /\w/;
  for (let char of str.toLowerCase()) {
    if (isValidAlphs.test(char)) {
      if (!charMap[char]) {
        charMap[char] = 0;
      }
      charMap[char]++;
    }
  }

  return charMap;
}
