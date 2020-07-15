# Given a sentence, return the longest word in the string
def longest_word(sentence):
  sentence_list = sentence.split(' ')
  longest = ''
  for word in sentence_list:
    if len(word) > len(longest):
      longest = word
  
  return longest

print(longest_word('Walking talking having breakfast at tiffany\'s'))