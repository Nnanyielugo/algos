"""
  Define a function called reverse that takes a string textand returns that string in reverse. For example: reverse("abcd") should return "dcba".

  You may not use reversed or [::-1] to help you with this.

  You may get a string containing special characters (for example, !, @, or #).
"""

def reverse(text):
  end_string = ''
  for char in text:
    end_string = char + end_string
  return end_string