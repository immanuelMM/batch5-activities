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
    def get
        puts "battery -" + battery_level.to_s
        puts "Phone is"
        puts "Charging ... " + charge.to_s 
        puts check_cell_signal 
        puts boot
        puts "/////////////////////////////////"
    end
end
class Laptop 
    include Battery
    include Signal
    include Boot
    def get
        puts "battery -" + battery_level.to_s
        puts "Laptop is"
        puts "Charging ... " + charge.to_s 
        puts check_cell_signal 
        puts boot
        puts "/////////////////////////////////"
    end
end
class Computer 
    include Boot
    def get
        puts "Computer is"
        puts boot
    end
end

# call
phone = Phone.new
phone.get
laptop = Laptop.new
laptop.get
computer = Computer.new
computer.get

