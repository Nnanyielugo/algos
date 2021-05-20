def staircase(n):
  for row in range(n):
    stair = ''
    for col in range(n):
      if (row >= col):
        stair += '#'
      else:
        stair += ' '
    print(stair)

def staircaseRev(n):
  for row in range(n):
    stair = ''
    for col in range(n-1, -1, -1):
      if row >= col:
        stair += '#'
      else:
        stair += ' '
    print(stair)

# staircase recursive function
# def staircase(n, row = 0, stair = ''):
#   if n == row:
#     return

#   if len(stair) == n:
#     print(stair)
#     return staircase(n, row + 1)

#   if len(stair) <= row:
#     stair += '#'
#   else:
#     stair += ' '
  
#   return staircase(n, row, stair)

staircaseRev(9)
