"""
  Write a function called median that takes a list as an input and returns the median value of the list. 
  For example: median([1, 1, 2]) should return 1.

  The list can be of any size and the numbers are not guaranteed to be in any particular order. Make sure to sort it!
  If the list contains an even number of elements, your function should return the average of the middle two.
"""

def median(nums):
  sorted_nums = sorted(nums)
  length = len(nums)
  if length == 1:
    return nums[0]
  elif length % 2 == 0:
    mid = length / 2
    upper_half = sorted_nums[mid]
    lower_half = sorted_nums[mid - 1]
   
    return (float(upper_half) + lower_half) / 2
  else:
    mid = length / 2
    return sorted_nums[mid]
    