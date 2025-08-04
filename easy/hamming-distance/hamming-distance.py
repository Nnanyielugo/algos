"""
  The hamming distance between two strings of equal length is the number of positions at which these strings vary. 
  In more technical terms, it is a measure of the minimum number of changes required to turn one string into another.
  
  Given two strings of equal length, calculate and return the the hamming distance.
"""

def hamming_distance(str1, str2):
  if len(str1) != len(str2):
    raise ValueError('Both strings must be of equivalent length')

  diff = 0



  for index in range(len(str1)):
    if str1[index] != str2[index]:
      diff += 1
  
  return diff

print(hamming_distance('rover', 'river'))