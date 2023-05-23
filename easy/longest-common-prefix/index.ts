function longestCommonPrefix(strs: string[]): string {
  let matchingPrefix = strs[0];

  for (let word of strs) {
    let match = '';
    // using a nested for loop instead of forEach
    // so I can break out of the inner loop
    for (let index = 0; index < word.length; index++) {
      let char = word[index];
      if (matchingPrefix[index] === char) {
        match += char;
      } else {
        break;
      }
    }
    matchingPrefix = match;
  }

  return matchingPrefix;
}
