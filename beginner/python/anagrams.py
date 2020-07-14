def is_anagram(word1, word2):
  if len(word1) != len(word2):
    return False
  
  word_one_sorted = ''.join(sorted(word1))
  word_two_sorted = ''.join(sorted(word2))

  return word_one_sorted == word_two_sorted

def is_anagram_w_char_map(word1, word2):
  if len(word1) != len(word2):
    return False
  
  def create_char_map(text):
    char_map = {}

    for char in text:
      if char not in char_map:
        char_map[char] = 1
      else:
        char_map[char] += 1
    
    return char_map

  word1_char_map = create_char_map(word1)
  word2_char_map = create_char_map(word2)

  for char in word1_char_map:
    if char in word2_char_map:
      if word1_char_map[char] != word2_char_map[char]:
        return False
    else:
      return False
  
  return True



print(is_anagram_w_char_map('seen', 'needless'))
print(is_anagram_w_char_map('silent', 'listen'))
print(is_anagram_w_char_map('two', 'far'))