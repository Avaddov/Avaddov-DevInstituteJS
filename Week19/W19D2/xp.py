# 🌟 Exercise 1: What Are You Learning?


def display_message():
    print("I am learning in this course.")
    
display_message()



# 🌟 Exercise 2: What’s Your Favorite Book?


def favorite_book(title):
    print("One of my favorite books is", title)

favorite_book("Alice in Wonderland")



# 🌟 Exercise 3: Some Geography


def describe_city(city, country="Israel"):
    print(city, "is in", country)

describe_city("Paris", "France")
describe_city("Tel Aviv","Israel") 




# 🌟 Exercise 4: Random

import random

def compare_numbers(num1):
    num2 = random.randint(1, 100)
    
    print("Generated number:", num2)
    
    if num1 == num2:
        print("Success! The numbers are the same.")
    else:
        print("Fail! The numbers are different.")

# Call the function with a number between 1 and 100
compare_numbers(50)





# 🌟 Exercise 5: Let’s Create Some Personalized Shirts!


def make_shirt(size="large", text="I love Python"):
    print(f"The size of the shirt is {size} and the text is '{text}'")

# Call the function with default values
make_shirt()

# Call the function with different sizes and texts
make_shirt("medium")
make_shirt("small", "Hello, World!")
make_shirt(text="Programming is fun!", size="XL")  # Using keyword arguments




# 🌟 Exercise 6: Magicians …


def show_magicians(magician_list):
    for magician in magician_list:
        print(magician)

def make_great(magician_list):
    for i in range(len(magician_list)):
        magician_list[i] = magician_list[i] + " the Great"

magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

show_magicians(magician_names)

make_great(magician_names)
show_magicians(magician_names)  # The list has been modified with "the Great" appended to each magician's name
