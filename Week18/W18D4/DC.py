# Challenge 1 - Python Program to Print Multiples of a Number

def get_multiples(number, length):
    multiples = []
    current_number = number
    while len(multiples) < length:
        multiples.append(current_number)
        current_number += number
    return multiples

if __name__ == "__main__":
    number = int(input("Enter a number: "))
    length = int(input("Enter the desired list length: "))

    result = get_multiples(number, length)
    print(result)


# Challenge 2 - Python Program to Remove Duplicate Consecutive Letters

def remove_duplicate_consecutive_letters(word):
    result = []
    prev_letter = None
    for letter in word:
        if letter != prev_letter:
            result.append(letter)
            prev_letter = letter
    return ''.join(result)

if __name__ == "__main__":
    user_word = input("Enter a word: ")

    result = remove_duplicate_consecutive_letters(user_word)
    print(result)
