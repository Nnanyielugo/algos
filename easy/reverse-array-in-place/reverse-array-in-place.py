import math

def reverse_array_in_place(arr):
  half_len = int(math.ceil(len(arr)/2))
  for index in range(half_len):
    swap_index = len(arr) - 1 - index
    # don't need temp vars in python, can do multiple assignment
    arr[index], arr[swap_index] = arr[swap_index], arr[index]

  return arr

print(reverse_array_in_place([1, 3, 5, 7, 9]))
print(reverse_array_in_place([1, 3, 5, 7, 9, 11]))