# write a function that returns true if all the words in the sentence in thr left hand parameter
# exist in the sentence in the right hand parameter
# and returns false otherwise
def harmlessRansomNote(noteText, magazineText):
  noteMap = {}
  magazineMap = {}

  for word in noteText.split(' '):
    if word not in noteMap:
      noteMap[word] = 1
    else:
      noteMap[word] += 1
  
  for word in magazineText.split(' '):
    if word not in magazineMap:
      magazineMap[word] = 1
    else:
      magazineMap[word] += 1

  for word in noteMap:
    noteWordCount = noteMap[word]
    if (magazineMap[word] < noteWordCount):
      return False
  return True

note1 = 'this is a secret note for you from a secret admirier'
note2 = 'this is a note for you from a secret admirier'
magazine = 'puerto rico is a great place you must hike far from town to find a secret waterfall that i am an admirier of but note that it is not as hard as it seems this is my advice for you'

print(harmlessRansomNote(note2, magazine))