# abstraction
# class Grade
#     def initialize (fsem , ssem)
#         @fsem = fsem
#         @ssem = ssem
#     end
#     def total_grade
#         scrore / 2
#     end

#     private
#     def scrore
#         @fsem + @ssem 
#     end
# end

# man = Grade.new(98,75)
# result =  man.total_grade

# puts "Total Grade: " + result.to_s

# inheritance polymor or overwrite
class Person
    def initialize(first, last, age)
        @first = first
        @last_name = last
        @age = age
    end
    def birtday
        @age += 1
    end

    def introduce
        puts "Hi,everyone. My name is #{@first} #{@last_name}"
    end
end

class Student < Person
    def introduce
        puts "Hello, Teacher. My name is #{@first} #{@last_name}"
    end
end

class Teacher < Person
    def introduce
        puts "Hello, class. My name is #{@first} #{@last_name}"
    end
end

imman = Student.new("imman","mahusay",29)
imman.introduce
maureen = Teacher.new("maureen","camille",24)
maureen.introduce