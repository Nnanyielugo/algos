function isPalindrome(word){
  const reversed = word.split('').reverse().join('');

  return reversed === word;
}

console.log(isPalindrome('nan'))
console.log(isPalindrome('text'))