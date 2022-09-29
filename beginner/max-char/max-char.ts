function maxChar(str: string): string {
  interface CharMap {
    [char: string]: number;
  }
  let max = '';
  let maxCount = 0;
  const charMap: CharMap = {};

  for (let char of str) {
    if (char === ' ') continue;
    if (!charMap[char]) {
      charMap[char] = 0;
    }
    charMap[char]++;
    if (charMap[char] > maxCount) {
      max = char;
      maxCount = charMap[char];
    }
  }

  return str;
}

console.log(maxChar('abcccccd'));
console.log(maxChar('apple 1231111'));
console.log(maxChar('qutqghhrtqllytnqsstlqtysiltyhqhq'));
