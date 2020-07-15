def reverse_int(nums):
  absolute_num = abs(nums)
  int_sign = bool(nums > 0) - bool(nums < 0)
  reversed_nums = int(str(absolute_num)[::-1])
  return reversed_nums * int_sign

print(reverse_int(15))
print(reverse_int(981))
print(reverse_int(500))
print(reverse_int(-15))
print(reverse_int(-90))
