def maximumUniqueSubarray(nums):
  i = total = highest = 0
  charMap = {}

  for num in nums:
    if num not in charMap:
      charMap[num] = 0
    charMap[num] += 1
    total += num

    while charMap[num] > 1:
      leftNum = nums[i]
      charMap[leftNum] -= 1
      total -= leftNum
      i += 1
    
    highest = max(total, highest)
    
  return highest

print(maximumUniqueSubarray([5, 5, 9, 18, 7, 9, 16, 13, 11, 14, 2]))
print(maximumUniqueSubarray([4, 2, 4, 5, 6]))