from math import floor

def pyramid(n):
  col_count = n * 2 - 1
  midpoint = floor(col_count /2)
  for row in range(n):
    level = ''
    for col in range(col_count):
      pyramid_range = (midpoint - row <= col) and (midpoint + row >= col)
      if pyramid_range:
        level += '#'
      else:
        level += ' '
    print(level)

def pyramidRecursive(n, row = 0, level = ''):
  colCount = n * 2 - 1
  midpoint = floor(colCount / 2)
  level_length = len(level)
  pyramid_range = (midpoint - row <= level_length) and (midpoint + row >= level_length)

  if row == n: return

  if level_length == colCount:
    print(level)
    return pyramidRecursive(n, row + 1)

  if pyramid_range:
    level += '#'
  else: level += ' '

  return pyramidRecursive(n, row, level)

pyramidRecursive(9)