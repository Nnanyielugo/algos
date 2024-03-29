"""
  write out an algorithm that shifts every letter of a given string
  by the number that was passed in.
  the algorithm should account for nagative numbers
  example caesar_cipher('zoo keeper', 2), should output 'bqq mggrgt'
"""

def caesar_cipher(str, num):
  alphabets = 'abcdefghijklmnopqrstuvwxyz'
  # cover edge case where num is greater than the length of the alphabets
  shiftingNum = num % len(alphabets)

  lower_str = str.lower()
  output = ''
  for char in lower_str:
    if char.isspace():
      output += char
      continue

    origin_index = alphabets.index(char)
    destination_index = origin_index + shiftingNum

    if destination_index > (len(alphabets) - 1):
      # case: positve num where additon might be greater than alphabets index
      destination_index = destination_index - len(alphabets)
    elif destination_index < 0:
      # case: negative num where addition(subtraction really) might be less than zero
      destination_index = len(alphabets) + destination_index
    
    destination_char = alphabets[destination_index]

    # case: return uppercase letters to their original cases
    original_char = str[lower_str.index(char)]
    if original_char.isupper():
      destination_char = alphabets[destination_index].upper()
    output += destination_char
  
  return output

print(caesar_cipher('Zoo keeper', 90))
print(caesar_cipher('app developer', -27))