"""
  A falsy value is a value that is considered false when examined as a Boolean. 
  Recall that a Boolean value could either be true or false. 
  JavaScript uses type conversion to translate any value to true or false when required. 
  Examples of falsy values are: false, null, undefined, 0, NaN, and "".
  
  Given an array, remove all falsy values from the array and return an array of only truthy values.
"""

def falsy_bouncer(values):
  return [x for x in values if bool(x) is True]
   

print(falsy_bouncer([1, 0, None, '', 5]))