"""
  Define a function factorial that takes an integer x as input.

  Calculate and return the factorial of that number.
"""

def factorial(x):
  total = 1
  if x == 1 or x == 0:
    return total
  for _ in range(x):
    total *= x
    x -= 1
  return total


# recursion
# def factorial(x):
#   if x == 0 or x == 1:
#     return 1
#   else:
#     return x * factorial(x - 1)  