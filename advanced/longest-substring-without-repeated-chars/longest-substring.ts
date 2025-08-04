function longestSubstring(s: string): number {
  const charMap: { [key: string]: number } = {};
  let result = 0;
  let i = 0;

  for (let j = 0; j < s.length; j++) {
    const char = s[j];
    if (charMap[char]) {
      i = Math.max(charMap[char], i);
    }
    result = Math.max(result, j - i + 1);
    charMap[char] = j + 1;
  }

  return result;
}

console.log(longestSubstring('abcabcbb'));
console.log(longestSubstring('bbbbb'));
console.log(longestSubstring('pwwkew'));
console.log(longestSubstring(''));
console.log(longestSubstring('cdd'));

// sliding window
// function longestSubstring(s: string): number {
//   let result = 0;
//   let right = 0;
//   let left = 0;

//   const chars = new Int8Array(128);

//   while (right < s.length) {
//     const rightChar = s[right];
//     chars[rightChar.charCodeAt(0)]++;

//     while (chars[rightChar.charCodeAt(0)] > 1) {
//       const leftChar = s[left];
//       chars[leftChar.charCodeAt(0)]--;
//       left++;
//     }

//     result = Math.max(result, right - left + 1);
//     right++;
//   }

//   return result;
// }
