"""
  Define a function called anti_vowel that takes one string, text, as input and returns the text with all of the vowels removed.

  For example: anti_vowel("Hey You!") should return "Hy Y!". Don’t count Y as a vowel. Make sure to remove lowercase and uppercase vowels.
"""

def anti_vowel(text):
  vowels = 'aeiouAEIOU'
  result = ''
  
  for char in text:
    if char not in vowels:
      result += char
  return result