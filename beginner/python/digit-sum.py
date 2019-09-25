"""
  Write a function called digit_sum that takes a positive integer n as input and returns the sum of all that number’s digits. 
  For example: digit_sum(1234) should return 10 which is 1 + 2 + 3 + 4. 
  (Assume that the number you are given will always be positive.)
"""

def digit_sum(n):
  total = 0
  # create a string copy of the parameter
  copy_n = str(n)
  for str_r in copy_n:
    num_str = int(str_r)
    total += num_str
  return total