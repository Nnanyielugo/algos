# Given two lists list1 and list2, check if list2 is a subset of list1 and return True or False accordingly.
def check_nested_subsets(list1, list2):
  # for arr in list2:
  #   if arr not in list1:
  #     return False
  # return True

  # return all(x in list1 for x in list2)
  return all(map(list1.__contains__, list2))

print(check_nested_subsets([[2, 3, 1], [4, 5], [6, 8]], [[4, 5], [6, 8]]))
print(check_nested_subsets([[2, 3, 1], [4, 5], [6, 8]], [[4, 5], [6, 8], [2, 3, 1]]))
print(check_nested_subsets([['a', 'b'], ['e'], ['c', 'd']], [['g']]))