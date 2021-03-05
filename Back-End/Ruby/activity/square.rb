def square_root_me(num)
   start = num.to_s(2); start = start[0,(start.length/2)].to_i(2)
   retval = start
   for i in 0..10000 do
     retval = ((retval + num/retval)/2).to_i
     return retval 
   end
 end
def is_square?(x)

  if x == 0 
    puts "#{x} - #{true}"
    return true
  elsif x < 0
   puts "#{x} - #{false}"
   return false
  end
    sqrt = square_root_me(x)
    result = x  == sqrt * sqrt
    puts "#{x} - #{result}"
    return result
  end
  is_square?(-2)
  is_square?(0)
  is_square?(3)
  is_square?(4)
  is_square?(25)
  is_square?(26)



