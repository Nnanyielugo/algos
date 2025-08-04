function fizzbuzz(num) {
  for (let i = 1; i <= num; i++) {
    let emit = i;
    if (i % 3 === 0 && i % 5 === 0)
      emit = 'fizzbuzz'
    else if (i % 3 === 0)
      emit = 'fizz'
    else if (i % 5 === 0)
      emit = 'buzz'
    console.log(emit)
  }  
}

fizzbuzz(60)