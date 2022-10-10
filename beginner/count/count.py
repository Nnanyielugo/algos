def count(sequence, item):
  times = 0
  for char in sequence:
    if char == item:
      times += 1
  return times
  