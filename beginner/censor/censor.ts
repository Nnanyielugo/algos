function censor(text: string, word: string): string {
  const result: string[] = [];
  for (let str of text.split(' ')) {
    if (str === word) {
      // TS requires lib set to ES6 and above for this to work
      // result.push('*'.repeat(word.length));

      // SLOW
      // result.push(new Array(str.length + 1).join('*'));

      let censortext = '';
      while (censortext.length < str.length) {
        censortext += '*';
      }

      result.push(censortext);
    } else {
      result.push(str);
    }
  }

  return result.join(' ');
}

console.log(censor('this hack is wack hack', 'hack'));
