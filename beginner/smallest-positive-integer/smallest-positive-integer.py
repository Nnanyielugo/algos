def smallestPositiveInteger(A):
  result = None

  for ind, _ in enumerate(iter(bool, True), start=1):
    if ind not in A:
      result = ind
      break
  return result

print(smallestPositiveInteger([1, 3, 6, 4, 1, 2]))
print(smallestPositiveInteger([1, 2, 3]))
print(smallestPositiveInteger([-1, -3]))
