# Find the smallest integer in the array
# Given an array of integers your solution should find the smallest integer.
# For example:
# Given [34, 15, 88, 2] your solution will return 2
# Given [34, -345, -1, 100] your solution will return -345
# You can assume, for the purpose of this challenge, that the supplied array will not be empty.
# 7:34
# Note: Avoid using .min and .sort method


def getlowest arr
    if arr.size < 2 then
      return arr.first, nil
    end
    lowest  =  nil
    arr.each do |n|
      if lowest.nil? or n < lowest
        lowest = n
      end       
    end
    return lowest
end

  puts getlowest [34 , 15 , 88 , 2]
  puts getlowest [34, -345, -1, 100]