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

def pyramidRecursive(n, row = 0, col = 0, level = ''):
  colCount = n * 2 - 1
  midpoint = floor(colCount / 2)
  pyramid_range = (midpoint - row <= col) and (midpoint + row >= col)

  if row == n: return

  if len(level) == colCount:
    print(level)
    return pyramidRecursive(n, row + 1)

  if pyramid_range:
    level += '#'
  else: level += ' '

  return pyramidRecursive(n, row, col + 1, level)

pyramidRecursive(9)