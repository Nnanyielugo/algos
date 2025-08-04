def staircase(n):
  for row in range(n):
    stair = ''
    for col in range(n-1, -1, -1):
      if row >= col:
        stair += '#'
      else:
        stair += ' '
    print(stair)

# staircase recursive function
def staircase_recursive(n, row=None, stair = ''):
  if  row is None:
    row = n

  if row == 0:
    return

  if len(stair) == n:
    print(stair)
    return staircase_recursive(n, row - 1)

  if len(stair) >= row - 1:
    stair += '#'
  else:
    stair += ' '
  
  return staircase_recursive(n, row, stair)

staircase_recursive(5)
