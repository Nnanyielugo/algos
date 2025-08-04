def sortArrayByParity(nums):
  result = [None] * len(nums)
  even = 0
  odd = 1

  for i, num in enumerate(nums):
    if num % 2 == 0:
      result[even] = num
      even += 2
    else:
      result[odd] = num
      odd += 2
  
  return result

# def sortArrayByParity(nums):
#   result = [None] * len(nums)
#   result[::2] = (x for x in nums if x % 2 == 0)
#   result[1::2] = (x for x in nums if x % 2 != 0)
#   return result

print(sortArrayByParity([4, 2, 5, 7]))
print(sortArrayByParity([888, 505, 627, 846]))