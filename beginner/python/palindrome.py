def is_palindrome(word):
  reversed_word = word[::-1]
  return reversed_word == word

print(is_palindrome('nan'))
print(is_palindrome('text'))