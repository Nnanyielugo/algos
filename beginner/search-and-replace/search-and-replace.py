def search_and_replace(sentence, target, replacement):
  for word in sentence.split(' '):
    if word.lower() == target.lower():
      return sentence.replace(word, replacement)
  
  return sentence
