def smallestPositiveInteger(A):
  for ind, _ in enumerate(iter(bool, True), start=1):
    if ind not in A:
      return ind

print(smallestPositiveInteger([1, 3, 6, 4, 1, 2]))
print(smallestPositiveInteger([1, 2, 3]))
print(smallestPositiveInteger([-1, -3]))
