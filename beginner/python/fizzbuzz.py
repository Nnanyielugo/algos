def fizzbuzz(num):
  for _, ind in enumerate(range(1, num + 1)):
    emit = ind
    if ind % 3 == 0 and ind % 5 == 0:
      emit = 'fizzbuzz'
    elif ind % 3 == 0:
      emit = 'fizz'
    elif ind % 5 == 0:
      emit = 'buzz'
    print(emit)

fizzbuzz(60)