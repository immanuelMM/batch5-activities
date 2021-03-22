require 'set'
def findunique(arr)
puts Set.new(arr).to_a
end
findunique([1,2,3,2,3,4])