def purify(numbers):
  return [num for num in numbers if num % 2 == 0]
  
print(purify([1,2,3]))