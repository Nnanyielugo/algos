function longestSubstring(s) {
  const charMap = {};
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
