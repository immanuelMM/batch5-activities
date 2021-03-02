# 1 
# arr = [1 , 3 , 5 ,7, 9, 11]
# number = 3

# result = arr.include? number

# puts result

# 2
 
print "Enter top level domain: "

domain = gets.chomp

case domain
    when "US"
        puts "united state"
    when "de"
        puts "Germany"
    when "sk"
        puts "Slovakia"
    else
        puts "unknown"
end 