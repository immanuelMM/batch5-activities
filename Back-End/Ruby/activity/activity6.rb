# Given a string s consisting of small English letters, find and return the first instance of a non-repeating 
# character in it. If there is no such character, return '_'.
# Example
# For s = "abacabad", the output should be
# firstNotRepeatingCharacter(s) = 'c'.
# There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears in the string first.
# For s = "abacabaabacaba", the output should be
# firstNotRepeatingCharacter(s) = '_'.
# There are no characters in this string that do not repeat.
# Input/Output
# [input] string s
# A string that contains only lowercase English letters.
# Guaranteed constraints:
# 1 ≤ s.length ≤ 105.
# [output] char
# The first non-repeating character in s, or '_' if there are no characters that do not repeat.

s1 = "abacabad"
s2 = "abacabaabacaba"

def duplicate(arr)
    arr.each_char do |chr|
       return chr if arr.downcase.count(chr.downcase) < 2
    end
    "_"
end
puts duplicate(s1) 
puts duplicate(s2) 
#=> 2
