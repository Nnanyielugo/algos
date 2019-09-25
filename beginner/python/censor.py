"""
  Write a function called censor that takes two strings, text and word, as input. 
  It should return the text with the word you chose replaced with asterisks. For example:

  censor("this hack is wack hack", "hack") ```

  should return: 

  ```py
  "this **** is wack ****"
  Assume your input strings won’t contain punctuation or upper case letters.
  The number of asterisks you put should correspond to the number of letters in the censored word.
"""

def censor(text, word):
  result = []
  str_list = text.split()
  
  for word_chars in str_list:
    if word_chars == word:
      censor_chars = '*' * len(word)
      result.append(censor_chars)
    else:
      result.append(word_chars)
      
  return ' '.join(result)