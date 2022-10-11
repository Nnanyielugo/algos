"""
  write an algorithm that searches for a given value inside a list
  this algorighm should run in O(log n)
"""
import math

def IBinarySearch(numArray, key):
  start = 0
  end = len(numArray) - 1

  while start <= end:
    midpoint = math.floor((start + end)/2)

    if numArray[midpoint] == key:
      return True
    elif numArray[midpoint] < key:
      start = midpoint + 1
    else:
      end = midpoint - 1
  return False

def RBinarySearch(numArray, key):
  midpoint = math.floor(len(numArray) / 2)
  if numArray[midpoint] == key:
    return True
  elif numArray[midpoint] < key and  len(numArray) > 1:
    return RBinarySearch(numArray[midpoint:], key)
  elif numArray[midpoint] > key and len(numArray) > 1:
    return RBinarySearch(numArray[0:midpoint], key)
  else:
    return False

print(RBinarySearch([5, 7, 12, 16, 36, 39, 42, 56, 72], 56))