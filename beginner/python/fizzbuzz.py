def fizzbuzz(num):
  for _, ind in enumerate(range(num)):
    adjusted_index = ind + 1
    emit = adjusted_index
    if adjusted_index % 3 == 0 and adjusted_index % 5 == 0:
      emit = 'fizzbuzz'
    elif adjusted_index % 3 == 0:
      emit = 'fizz'
    elif adjusted_index % 5 == 0:
      emit = 'buzz'
    print(emit)

fizzbuzz(60)