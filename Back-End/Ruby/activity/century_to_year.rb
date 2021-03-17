def centuryFromYear(year)
     if (year % 100) == 0
       year/100
     else 
       (year - (year % 100))/100 + 1
     end
end
puts centuryFromYear(1991)
