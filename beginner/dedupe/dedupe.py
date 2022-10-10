def dedupe(nums):
  result = []
  for num in nums:
    if num not in result:
      result.append(num)
  return result
  