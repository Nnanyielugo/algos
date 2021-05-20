"""
  Create a function that reverses the array passed in.
  It is important that these two rules are kept:
    1. Do not create a new array
    2. Do not use the native array reverse method
"""

import math

def reverse_array_in_place(arr):
  half_len = int(math.ceil(len(arr)/2))
  for index in range(half_len):
    end_index = len(arr) - 1 - index
    # dont need temp vars in python, can do multiple assignment
    arr[index], arr[end_index] = arr[end_index], arr[index]

  return arr

print(reverse_array_in_place([1, 3, 5, 7, 9]))
print(reverse_array_in_place([1, 3, 5, 7, 9, 11]))