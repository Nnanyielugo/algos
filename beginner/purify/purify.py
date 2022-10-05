def purify(numbers):
  result = []
  for num in numbers:
    if num % 2 == 0:
      result.append(num)
  return result
  