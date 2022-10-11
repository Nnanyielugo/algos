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