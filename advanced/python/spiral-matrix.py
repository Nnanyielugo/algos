def spiral_matrix(n):
  # create n number of empty arrays in result
  # fill with n number of Nones, to mimic
  # the js method of assigning to arbitrary spaces in array and
  # circumvent "out of bounds assignment" range error
  result = []
  for _index in range(n):
    result.append([None for x in range(n)])

  counter = 1
  start_row = 0
  start_col = 0
  end_row = n-1
  end_col = n-1

  while((start_row <= end_row) and (start_col <= end_col)):
    # top row
    for index in range(start_col, end_col + 1):
      result[start_row][index] = counter
      counter += 1
    start_row += 1

    # right column
    for index in range(start_row, end_row + 1):
      result[index][end_col] = counter
      counter += 1
    end_col -= 1

    # bottom row
    for index in range(end_col, start_col - 1, -1):
      result[end_row][index] = counter
      counter += 1
    end_row -= 1

    # left column
    for index in range(end_row, start_row - 1, -1):
      result[index][start_col] = counter
      counter += 1
    start_col += 1

  return result

mat = spiral_matrix(3)
for m in mat:
  print(m)