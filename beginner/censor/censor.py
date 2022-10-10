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
  