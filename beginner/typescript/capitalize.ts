function capitalize(str: string): string {
  const result: string[] = [];
  for (let _str of str.split(" ")) {
    const modified_string = _str[0].toUpperCase().concat(_str.slice(1));
    result.push(modified_string);
  }
  return result.join(" ");
}

const str1 = "a short sentence";
const str2 = "a lazy fox";
const str3 = "look, it is working";

console.log(capitalize(str3));
