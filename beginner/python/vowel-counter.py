# Given a string of text containing 0 or more vowels, count the number of vowels that can be found within the text.

def vowel_counter(string):
  vowel_count = 0
  vowels = 'aeiou'

  for char in string.lower():
    if vowels.find(char) != -1:
      vowel_count += 1
  
  return vowel_count

print(vowel_counter('anehizxcv'))