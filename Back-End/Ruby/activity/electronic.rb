# We have Laptop and Phone classes that need battery_level and battery_level= attribute accessor methods,
#  a charge method, a boot method, and a check_cell_signal method. We also have 
#  a Computer class that only needs the boot method.
# See if you can create a PortableDevice module with a battery_level, battery_level=, 
# check_cell_signal, and charge method, and an ComputeDevice module with a boot method.
#  You might want to set a default for battery_level
# Then, mix those modules into the Laptop, Phone, and Computer classes, as appropriate. 
# The Laptop and Phone classes should have battery_level, battery_level=, charge, boot,
#  and check_cell_signal methods. The Computer class should have the boot method only.


# class ElectronicDevice
#     attr_accessor :battery_level
#     def initialize
#       self.battery_level = 0
#     end
#     def charge
#       self.battery_level += 1
#     end
#     def boot
#       puts "Booting device..."
#     end
#     def check_cell_signal
#       puts "Searching cell site..."
#     end
# end
module Battery
    attr_accessor :battery_level
        def initialize
          self.battery_level = 0
        end
        def charge
          self.battery_level += 1
        end
end
module Signal
    def check_cell_signal
        puts "Searching cell site..."
    end
end
module Boot
    def boot
        puts "Booting device..."
    end
end

class Phone 
    include Battery
    include Signal
    include Boot
end
class Laptop 
    include Battery
    include Signal
    include Boot
end
class Computer 
    include Boot
end

phone = Phone.new
puts "Phone is"
puts phone.battery_level
puts "Charging ... " + phone.charge.to_s 
puts phone.check_cell_signal 
puts phone.boot
puts "////////////"
laptop = Laptop.new
puts "Laptop is"
puts laptop.battery_level
puts "Charging ... " + laptop.charge.to_s 
puts laptop.check_cell_signal 
puts laptop.boot
puts "////////////"
computer = Computer.new
puts "Computer is"
puts computer.boot
