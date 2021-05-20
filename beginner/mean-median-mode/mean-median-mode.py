"""
  write an algorithm that takes an array a parameter, and returns an object that has the following properties:
  mean - the mean of all the numbers in the array
  median - the median of all the numbers in the array
  mode - the mode of all the numbers in the array
"""

import math

def get_mean(arr):
  total = sum(arr)
  average = total / len(arr)
  return round(average, 2)

def get_median(arr):
  sorted_arr = sorted(arr)
  median_index = len(arr)/2
  median = None
  if (median_index.is_integer()):
    median = (sorted_arr[int(median_index)] + sorted_arr[int(median_index) - 1]) / 2 
  else:
    median = sorted_arr[int(math.floor(median_index))]
  return median

def get_mode(arr):
  arr_map = {}
  max_frequency = 0
  modes = []
  for num in arr:
    if num not in arr_map:
      arr_map[num] = 1
    else:
      arr_map[num] += 1

    if arr_map[num] > max_frequency:
      max_frequency = arr_map[num]
      modes = [num]
    elif arr_map[num] == max_frequency:
      modes.insert(len(modes), num)
  
  # case: all items occur at the same frequency
  if len(modes) == len(arr_map.keys()):
    modes = []
  
  return modes
    

def mean_median_mode(arr):
  return {
    'mean': get_mean(arr),
    'median': get_median(arr),
    'mode': get_mode(arr)
  }

print(mean_median_mode([1, 4, 5, 3, 8, 7, 5, 7, 9]))
print(mean_median_mode([4, 6, 7, 9, 1, 5]))