from math import floor

def pyramid(n):
  col_count = n * 2 - 1
  midpoint = floor(col_count /2)
  for row in range(n):
    level = ''
    for col in range(col_count):
      pyramid_range = (midpoint + row >= col) and (midpoint - row <= col)
      if pyramid_range:
        level += '#'
      else:
        level += ' '
    print(level)

pyramid(9)