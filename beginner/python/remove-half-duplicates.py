"""
  If I have a list say l=[1,8,8,8,1,3,3,8] and it's guaranteed that every element occurs an even number of times, 
  how do I make a list with all elements of l now occurring n/2 times. 
  So since 1 occurred 2 times, it should now occur once. 
  Since 8 occurs 4 times, it should now occur twice. Since 3 occurred twice, it should occur once.

  So the new list will be something like k=[1,8,8,3]
"""
def remove_half_duplicates(lst):
  # assume returned order isn't helpful, so we sort
  lst.sort()
  # get all odd indicies
  return lst[1::2]

def remove_half_duplicates_keep_order(lst):
  count = {}
  res = []
  for i in lst:
    if i in count:
      count[i] += 1
    else:
      count[i] = 1
    if count[i] % 2:
      res.append(i)
  return res

print(remove_half_duplicates_keep_order([1, 8, 8, 8, 1, 3, 3, 8]))