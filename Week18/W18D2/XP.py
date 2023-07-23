# Exercise 1: Hello World


print("Hello world\n" * 4)

# Exercise 2: Some Math


result = (99 ** 3) * 8
print(result)




# Exercise 3: What Is The Output?


print(5 < 3)       # Output: False
print(3 == 3)      # Output: True
print(3 == "3")    # Output: False
print("3" > 3)     # Output: Error - TypeError: '>' not supported between instances of 'str' and 'int'
print("Hello" == "hello")   # Output: False




# Exercise 4: Your Computer Brand


computer_brand = "YourComputerBrand"
print("I have a", computer_brand, "computer.")



# Exercise 5: Your Information


name = "Dov"
age = 26
shoe_size = 11
info = f"My name is {name}, I am {age} years old, and my shoe size is {shoe_size}."
print(info)



# Exercise 6: A & B


a = 10
b = 5
if a > b:
    print("Hello World")
Exercise 7: Odd Or Even


num = int(input("Enter a number: "))
if num % 2 == 0:
    print("Even")
else:
    print("Odd")



# Exercise 8: What’s Your Name?


user_name = input("What's your name? ")
if user_name == "Your Name":
    print("Hey, we have the same name!")
else:
    print("Nice to meet you,", user_name)




# Exercise 9: Tall Enough To Ride A Roller Coaster
height_inches = float(input("Enter your height in inches: "))
height_cm = height_inches * 2.54

if height_cm > 145:
    print("You are tall enough to ride!")
else:
    print("You need to grow some more to ride.")