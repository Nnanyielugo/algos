# Given two or more arrays, write a function that combines their elements into one array without any repetition

def merge_array(*args):
  return list(set([y for x in args for y in x]))

print(merge_array([1,2,3,3,3], [1,4,5,2]))
