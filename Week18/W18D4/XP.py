#  Exercise 1: Set


# Create a set called my_fav_numbers with all your favorites numbers.
my_fav_numbers = {1, 7, 15, 22}

# Add two new numbers to the set.
my_fav_numbers.add(8)
my_fav_numbers.add(10)

# Remove the last number.
my_fav_numbers.remove(22)

# Create a set called friend_fav_numbers with your friend’s favorites numbers.
friend_fav_numbers = {5, 9, 12, 15}

# Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers.
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)

print(our_fav_numbers)


#  Exercise 2: Tuple

# Tuples are immutable, meaning once they are created, their elements cannot be changed or added. Therefore, it is not possible to add more integers to an existing tuple. If you need to add or modify elements, you should use a list instead.


# Exercise 3: List


basket = ["Banana", "Apples", "Oranges", "Blueberries"]

# Remove “Banana” from the list.
basket.remove("Banana")

# Remove “Blueberries” from the list.
basket.remove("Blueberries")

# Add “Kiwi” to the end of the list.
basket.append("Kiwi")

# Add “Apples” to the beginning of the list.
basket.insert(0, "Apples")

# Count how many apples are in the basket.
apple_count = basket.count("Apples")
print("Number of apples in the basket:", apple_count)

# Empty the basket.
basket.clear()

print(basket)


#  Exercise 4: Floats

# A float is a data type in Python used to represent numbers with decimal points. The difference between an integer and a float is that integers are whole numbers(e.g., 1, 5, -10), while floats can have decimal parts(e.g., 1.5, -3.14, 0.25).

# Another way to generate a sequence of floats is by using the built-in range function with appropriate step size and converting the results to floats. For example, to generate a sequence of floats from 1.5 to 5 (inclusive) with a step of 0.5:


float_sequence = [float(x) for x in range(15, 51, 5)]
print(float_sequence)



#  Exercise 5: For Loop


# Use a for loop to print all numbers from 1 to 20, inclusive.
for number in range(1, 21):
    print(number)

# Using a for loop, print out every element which has an even index.
for number in range(1, 21):
    if number % 2 == 0:
        print(number)


#  Exercise 6: While Loop


# Write a while loop that will continuously ask the user for their name, unless the input is equal to your name.
your_name = "Dov"  # Replace this with your actual name
user_input = ""

while user_input != your_name:
    user_input = input("Please enter your name: ")




#  Exercise 7: Favorite Fruits


# Ask the user to input their favorite fruit(s) (one or several fruits).
fav_fruits_str = input("Enter your favorite fruit(s) separated by a single space: ")

# Store the favorite fruit(s) in a list (convert the string of words into a list of words).
favorite_fruits = fav_fruits_str.split()

# Now that we have a list of fruits, ask the user to input a name of any fruit.
fruit_name = input("Enter a fruit name: ")

# If the user’s input is in the favorite fruits list, print “You chose one of your favorite fruits! Enjoy!”.
if fruit_name in favorite_fruits:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy.")





#  Exercise 8: Who Ordered A Pizza?


toppings = []
total_price = 10  # Base price for the pizza

while True:
    topping = input("Enter a pizza topping (type 'quit' to stop): ")
    if topping.lower() == "quit":
        break
    toppings.append(topping)
    total_price += 2.5

print("Toppings on the pizza:", toppings)
print("Total price:", total_price)






#  Exercise 9: Cinemax


# Ask a family the age of each person who wants a ticket.
family_ages_str = input("Enter the ages of family members separated by a single space: ")

# Store the ages in a list of integers.
ages = [int(age) for age in family_ages_str.split()]

# Calculate the total cost of all the family’s tickets.
total_cost = 0
for age in ages:
    if age < 3:
        # Ticket is free for ages under 3
        continue
    elif 3 <= age <= 12:
        total_cost += 10
    else:
        total_cost += 15

print("Total cost of tickets for the family:", total_cost)

# A group of teenagers for the restricted movie
teenagers = ["Alice", "Bob", "Charlie", "David", "Eve"]

# Filter out teenagers who are not permitted to watch the movie (ages between 16 and 21).
allowed_teenagers = [name for name in teenagers if 16 <= ages[teenagers.index(name)] <= 21]
print("Teenagers allowed to watch the movie:", allowed_teenagers)




#  Exercise 10: Sandwich Orders


sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
finished_sandwiches = []

# Use a while loop to remove all occurrences of “Pastrami sandwich” from sandwich_orders.
while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")

# One by one, remove each sandwich from the sandwich_orders while adding them to the finished_sandwiches list.
while sandwich_orders:
    current_sandwich = sandwich_orders.pop()
    finished_sandwiches.append(current_sandwich)
    print(f"I made your {current_sandwich.lower()}")

# Print all the sandwiches that were made.
print("\nSandwiches made:")
for sandwich in finished_sandwiches:
    print(sandwich)
