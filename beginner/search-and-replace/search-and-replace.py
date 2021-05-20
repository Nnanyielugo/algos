"""
  Receiving a sentence, a word in the sentence and a replacement for that word as arguments,
  perform a search and replace on the sentence using the arguments provided and return the new sentence.
"""

def search_and_replace(sentence, target, replacement):
  for word in sentence.split(' '):
    if word.lower() == target.lower():
      return sentence.replace(word, replacement)
  
  return sentence

print(search_and_replace("He is Sleeping on the couch", "Sleeping", "sitting"))
