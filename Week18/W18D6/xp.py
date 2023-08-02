

# Exercise 1: Convert Lists Into Dictionaries


# Given lists
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

# Convert lists into a dictionary using the zip method
result_dict = dict(zip(keys, values))

# Print the output
print(result_dict)


{'Ten': 10, 'Twenty': 20, 'Thirty': 30}



# Exercise 2: Cinemax


# Given family dictionary
family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

# Calculate ticket prices for each family member
total_cost = 0
for name, age in family.items():
    if age < 3:
        ticket_price = 0
    elif 3 <= age <= 12:
        ticket_price = 10
    else:
        ticket_price = 15
    print(f"{name} has to pay ${ticket_price}.")
    total_cost += ticket_price

# Print the family's total cost for the movies
print("Family's total cost for the movies:", total_cost)


family = {}

# Ask the user for names and ages and add them to the family dictionary
num_family_members = int(input("Enter the number of family members: "))
for i in range(num_family_members):
    name = input(f"Enter the name of family member {i+1}: ")
    age = int(input(f"Enter the age of {name}: "))
    family[name] = age

# Calculate ticket prices for each family member
total_cost = 0
for name, age in family.items():
    if age < 3:
        ticket_price = 0
    elif 3 <= age <= 12:
        ticket_price = 10
    else:
        ticket_price = 15
    print(f"{name} has to pay ${ticket_price}.")
    total_cost += ticket_price

# Print the family's total cost for the movies
print("Family's total cost for the movies:", total_cost)





# Exercise 3: Zara


# Part 1 - Create a dictionary called brand
brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": "pink, green"
    }
}

# Part 2 - Change the number of stores to 2
brand["number_stores"] = 2

# Part 3 - Print a sentence that explains who Zara's clients are
print("Zara's clients are men, women, children, and home shoppers.")

# Part 4 - Add a key called country_creation with a value of Spain
brand["country_creation"] = "Spain"

# Part 5 - Check if the key international_competitors is in the dictionary. If it is, add the store Desigual.
if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")

# Part 6 - Delete the information about the date of creation
del brand["creation_date"]

# Part 7 - Print the last international competitor
print("Last international competitor:", brand["international_competitors"][-1])

# Part 8 - Print the major clothes colors in the US
print("Major clothes colors in the US:", brand["major_color"]["US"])

# Part 9 - Print the amount of key-value pairs (length of the dictionary)
print("Number of key-value pairs:", len(brand))

# Part 10 - Print the keys of the dictionary
print("Keys of the dictionary:", list(brand.keys()))

# Part 11 - Create another dictionary called more_on_zara
more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000
}

# Part 12 - Use a method to add the information from the dictionary more_on_zara to the dictionary brand
brand.update(more_on_zara)

# Part 13 - Print the value of the key number_stores. What just happened?
print("Value of the key number_stores:", brand["number_stores"])
# The value of the key number_stores got updated to 10000.







# Exercise 4: Disney Characters


users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]

# #1 - Recreate the 1st result using a for loop
disney_users_A = {}
for i, name in enumerate(users):
    disney_users_A[name] = i
print(disney_users_A)

# #2 - Recreate the 2nd result using a for loop
disney_users_B = {}
for i, name in enumerate(users):
    disney_users_B[i] = name
print(disney_users_B)

# #3 - Recreate the 3rd result using a method (sorted alphabetically)
disney_users_C = dict(sorted(disney_users_A.items(), key=lambda item: item[0]))
print(disney_users_C)

# Recreate the 1st result for the characters whose names contain the letter "i"
disney_users_with_i = {}
for i, name in enumerate(users):
    if 'i' in name.lower():
        disney_users_with_i[name] = i
print(disney_users_with_i)

# Recreate the 1st result for the characters whose names start with the letter "m" or "p"
disney_users_start_with_m_or_p = {}
for i, name in enumerate(users):
    if name[0].lower() in ['m', 'p']:
        disney_users_start_with_m_or_p[name] = i
print(disney_users_start_with_m_or_p)