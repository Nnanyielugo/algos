// naive
function anagrams(stringA, stringB) {
  const cleanedA = cleanAndSortString(stringA);
  const cleanedB = cleanAndSortString(stringB);
  return cleanedA === cleanedB;
}

function cleanAndSortString(str) {
  return str.replace(/\W/g, '').toLowerCase().split('').sort().join('');
}

function createCharMap(string) {
  const charMap = {};
  for (let char of string) {
    if (!charMap[char]) {
      charMap[char] = 0;
    }
    charMap[char]++;
  }
  return charMap;
}

function anagramsWCharMap(stringA, stringB) {
  const cleanedStringA = stringA.replace(/\W/g, '').toLowerCase();
  const cleanedStringB = stringB.replace(/\W/g, '').toLowerCase();
  if (cleanedStringA.length !== cleanedStringB.length) {
    return false; // alternatively you can just compare charMap keys in the 'for' loop below
  }

  const stringACharMap = createCharMap(cleanedStringA);
  const stringBCharMap = createCharMap(cleanedStringB);

  for (let char in stringACharMap) {
    if (stringACharMap[char] !== stringBCharMap[char]) {
      return false;
    }
  }
  return true;
}

console.log(anagrams('silent', 'listen'));
console.log(anagrams('two', 'far'));
console.log(anagrams('tell', 'sell'));
console.log(anagrams('seen', 'needless'));
