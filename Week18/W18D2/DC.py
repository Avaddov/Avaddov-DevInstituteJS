import random

def jumble_string(s):
    # Convert the string to a list of characters
    chars = list(s)
    # Shuffle the characters randomly
    random.shuffle(chars)
    # Join the shuffled characters back into a string
    jumbled_string = ''.join(chars)
    return jumbled_string

def main():
    user_input = input("Please enter a string (10 characters): ")
    length = len(user_input)

    if length < 10:
        print("String not long enough.")
    elif length > 10:
        print("String too long.")
    else:
        print("Perfect string.")
        print("First character:", user_input[0])
        print("Last character:", user_input[-1])

        print("\nConstructing the string character by character:")
        for i in range(1, length + 1):
            print(user_input[:i])

        jumbled_string = jumble_string(user_input)
        print("\nJumbled string:", jumbled_string)

if __name__ == "__main__":
    main()
