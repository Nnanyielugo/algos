"""
  Define a function factorial that takes an integer x as input.

  Calculate and return the factorial of that number.
"""

def factorial(x):
  total = 1
  if x == 1:
    return x
  for _ in range(x):
    total *= x
    x -= 1
  return total