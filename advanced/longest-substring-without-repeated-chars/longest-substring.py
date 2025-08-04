def longestSubstring(s: str) -> int:
  res = 0
  i = 0
  charMap = {}

  for j in range(len(s)):
    char = s[j]
    if char in charMap:
      i = max(charMap[char], i)
    res = max(res, j - i + 1)
    charMap[char] = j + 1
  return res

# sliding window
# def longestSubstring(s: str) -> int:
#   res = 0
#   right = left = 0

#   chars = [0] * 128

#   while right < len(s):
#     rightChar = s[right]
#     chars[ord(rightChar)] += 1

#     while chars[ord(rightChar)] > 1:
#       leftChar = s[left]
#       chars[ord(leftChar)] -= 1
#       left += 1

#     res = max(res, right - left + 1)
#     right += 1
#   return res

print(longestSubstring('abcabcbb'))
print(longestSubstring('bbbbb'))
print(longestSubstring('pwwkew'))
print(longestSubstring(''))
print(longestSubstring('cdd'))