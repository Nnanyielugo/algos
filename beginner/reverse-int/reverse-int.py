def reverse_int(nums):
  int_sign = 1 if nums > 0 else -1 # alternatively can do: bool(nums > 0) - bool(nums < 0)
  absolute_num = abs(nums)
  reversed_nums = int(str(absolute_num)[::-1])

  return reversed_nums * int_sign

print(reverse_int(15))
print(reverse_int(981))
print(reverse_int(500))
print(reverse_int(-15))
print(reverse_int(-90))
