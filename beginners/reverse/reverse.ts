function reverse(text: string): string {
  let result = '';

  for (let char of text) {
    result = char + result;
  }
  return result;
}
