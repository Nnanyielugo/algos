"""
  Define a function called is_prime that takes a number x as input.

  For each number n from 2 to x - 1, test if x is evenly divisible by n.

  If it is, return False.

  If none of them are, then return True.
"""

def is_prime(x):
  # handle 0 and 1
  if x == 0 or x == 1:
    return False
  # handle negative numbers
  elif x < 0:
    return False

  for i in range(2, x):
    if x % i == 0:
      return False
  return True
  