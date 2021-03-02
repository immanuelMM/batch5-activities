# class Confection
#     def initiallize(degree , time)
#         @degree = degree
#         @time = time
#     end
#     def print_bake
#         puts "baking at 350 degree for 25 minutes"
#     end
# end

# class Cupcake < Confection
#     def print_cupcake
    
#     end
# end

# class Banana_cake < Confection
#     def print_banana
#     end
# end

module AdminPermisson
    def edit_users_profile
      puts "Admin updated all users profile"
    end
end
  
module BuyerPermission
    def buy
      puts "Buyer has bought an item"
    end  
end
  
class User
    attr_accessor  :password
    def initialize(username, password, ip_address)
     @username = username
     @password = password
     @ip_address  = ip_address
    end
    
    def change_password=(password)
        @password = password
    end

    protected
    def login
      puts "User logged in. IP address: #{@ip_address}"
    end
end
  
  
class Admin < User
    include AdminPermisson
    def admin_login
        self.login
    end
end
  
  
class Buyer < User
    include BuyerPermission
    def buyer_login
        self.login
    end
end
  
  
  
  ## execute
  
  my_admin = Admin.new('avionuser', 'password', '127.0.0.1')
  my_admin.admin_login
  my_admin.edit_users_profile
  
  my_admin.change_password = 'new_password'
  puts my_admin.password
  
  buyer = Buyer.new('juan', 'password', '127.0.0.1')
  buyer.buyer_login
  buyer.buy
  
  buyer.change_password = 'new_password'
  puts buyer.password                                                                                         