# abstraction
class Grade
    def initialize (fsem , ssem)
        @fsem = fsem
        @ssem = ssem
    end
    def total_grade
        scrore / 2
    end

    private
    def scrore
        @fsem + @ssem 
    end
end

man = Grade.new(98,75)
result =  man.total_grade

puts "Total Grade: " + result.to_s