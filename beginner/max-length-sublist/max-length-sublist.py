# Given a list of lists, write a Python program to find the list with maximum length. The output should be in the form (list, list_length).
def max_length_sublist(lst):
  max_list = max(lst, key=len)
  # max_len = max(map(len, lst))
  return max_list, len(max_list)

print(max_length_sublist([['A'], ['A', 'B'], ['A', 'B', 'C']]))
print(max_length_sublist([[1, 2, 3, 9, 4], [5], [3, 8], [2]]))