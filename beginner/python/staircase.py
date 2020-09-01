# def staircase(n, reverse=False):
#   for i in range(n):
#     output = ''
#     for j in range(n, 0, -1):
#       if i < (j - 1):
#         if reverse:
#           output += ' '
#         else:
#           output += ''
#       else:
#         output += '#'
#     print(output)

def staircase(n, row = 0, stair = ''):
  if n == row:
    return

  if len(stair) == n:
    print(stair)
    return staircase(n, row + 1)

  if len(stair) <= row:
    stair += '#'
  else:
    stair += ' '
  
  return staircase(n, row, stair)

staircase(9)
