class Animal 
    attr_accessor :name 
    def initialize(name , color , age)
        @name = name
        @color = color
        @age = age
    end  
    def walk
         "hey! #{@name} lets walk"
    end
end

class Dog < Animal
    def bark
        puts "#{@name} says wofwof"
    end
end

class Cat < Animal
    def meow
        puts "#{@name} says mawmawmaw"
    end
    def walk
        puts super + " - #{@name} : says  no no no no no"
    end
end

# call

immaru = Dog.new("imaru","red","1")
immareen = Cat.new("imareen","black","2")

puts "Getter used: - " + immaru.name
immaru.bark
immaru.walk
puts "Gettter used - " + immareen.name
immareen.meow
immareen.walk


# class Profile
#     attr_accessor :full_name , :age , :address , :work
#     def initialize(full_name, age, address, work)
#         @full_name = full_name
#         @age = age
#         @address = address
#         @work = work
#     end
#     # def full_name=(new_fullname)
#     #     @full_name = new_fullname
#     #     puts "hello #{@full_name}"
#     # end
# end
  
#   my_profile = Profile.new('Juan', 18, 'Bulacan', 'Instructor')
  
#   puts my_profile.full_name
#   my_profile.full_name = 'Juan Cruz'
  
#   my_profile.age = 25
#   my_profile.work = 'Software Engineer'
  
#   puts my_profile.full_name
#   puts my_profile.age
#   puts my_profile.work
#   puts my_profile.address
