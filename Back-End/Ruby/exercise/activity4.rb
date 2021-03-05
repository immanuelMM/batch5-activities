# silod prinsiple

# # single responsibility

# class Bookstore
#     def initialize(title_book,price,quantity)
#         @title_book = title_book
#         @price = price
#         @quantity = quantity
#     end

#     def displaybook
#         puts "list of book"
#         puts @title_book + " Pesos " + @price.to_s + " Quantity " + @quantity.to_s 
#     end

# end

# iman = Bookstore.new("adarna" , 100 , 10)
# iman.displaybook

# open/close responsibility

# ...

# liskov
 ...

#  interface Segregation
# class  Trasaction
#     def initialize(quantity , price , discount)
#         @quantity = quantity
#         @price = price
#         @discount = discount
#     end

#     def compute_total
#         @quantity * @price
#     end

#     def total_discount
#         @compute_total * @discount
#     end
# end

# Dependency Inverssion

# class Calculator
#     def initialize(operator)
#         @operator = operator
#     end

#     def calculate(x, y)
#         @operator.calculate
#     end
# end
