from math import floor

def pyramid(n):
  for row in range(n):
    level = ''
    for col in range(n * 2 - 1):
      midpoint = floor((n * 2 - 1)/2)
      pyramid_range = (midpoint + row >= col) and (midpoint - row <= col)
      if pyramid_range:
        level += '#'
      else:
        level += ' '
    print(level)

pyramid(9)