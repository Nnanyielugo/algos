def digit_sum(n):
  total = 0
  str_num = str(n)
  for char in str_num:
    int_char = int(char)
    total += int_char
  return total
  