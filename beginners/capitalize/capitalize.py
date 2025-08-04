def capitalize(str):
  caps_strs = [x.capitalize() for x in str.split(' ')]
  return ' '.join(caps_strs)

str1 = 'a short sentence'
str2 = 'a lazy fox'
str3 = 'look, it is working'

print(capitalize(str3))
