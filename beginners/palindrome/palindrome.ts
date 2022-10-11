function isPalindrome(str: string): boolean {
  const len = Math.ceil(str.length / 2);
  for (let i = 0; i < len; i++) {
    const charAtStartIndex = str[i];
    const charAtEndIndex = str[str.length - i - 1];
    if (charAtStartIndex !== charAtEndIndex) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome('abba'));
console.log(isPalindrome('abcba'));
console.log(isPalindrome('babcock'));
