def chunk(arr, size):
  results = []

  for item in arr:
    chunk = results[len(results) - 1] if len(results) else None
    if not chunk or len(chunk) == size:
      results.append([item])
    else:
      chunk.append(item)
  
  return results

print(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3))
