def list(arr_names)

  result = ""
  
  arr_names.each_with_index do |name, index|
  	if index < arr_names.size - 2 
  		result += name[:name] + ", "
  	elsif index == arr_names.size - 2
      result += name[:name] + " "
    elsif arr_names.size == 1
      result += name[:name]
    else  
  		result += "& " + name[:name]
    end
  end 
  result
end
puts list([{name:'Bart'},{name:'Lisa'},{name:'Maggie'}])
puts list([{name:'Bart'},{name:'Lisa'}])
puts list([{name:'Bart'}])