def staircase(n, reverse=False):
  for i in range(n):
    output = ''
    for j in range(n, 0, -1):
      if i < (j - 1):
        if reverse:
          output += ' '
        else:
          output += ''
      else:
        output += '#'
    print(output)

staircase(9)