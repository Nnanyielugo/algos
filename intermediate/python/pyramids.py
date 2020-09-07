from math import floor

def pyramid(n):
  for row in range(n):
    level = ''
    col_count = n * 2 - 1
    for col in range(col_count):
      midpoint = floor(col_count /2)
      pyramid_range = (midpoint + row >= col) and (midpoint - row <= col)
      if pyramid_range:
        level += '#'
      else:
        level += ' '
    print(level)

pyramid(9)