def anti_vowel(text):
  vowels = 'aeiou'
  result = ''
  
  for char in text:
    if char.lower() not in vowels:
      result += char
  return result
  
print(anti_vowel('La Orange'))