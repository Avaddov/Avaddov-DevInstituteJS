# 🌟 Exercise 1: Temperature Advice


import random

def get_random_temp(season):
    if season == 'winter':
        return random.uniform(-10, 16)
    elif season == 'spring' or season == 'autumn' or season == 'fall':
        return random.uniform(0, 23)
    elif season == 'summer':
        return random.uniform(16, 40)
    else:
        raise ValueError("Invalid season. Please choose one of: 'summer', 'autumn', 'fall', 'winter', or 'spring'.")

def main():
    season = input("Please enter the current season (summer, autumn, winter, spring): ")
    temperature = get_random_temp(season)

    print(f"The temperature right now is {temperature:.1f} degrees Celsius.")

    if temperature < 0:
        print("Brrr, that’s freezing! Wear some extra layers today.")
    elif 0 <= temperature < 16:
        print("Quite chilly! Don't forget your coat.")
    elif 16 <= temperature < 24:
        print("It's a pleasant day. Enjoy!")
    elif 24 <= temperature < 32:
        print("It's getting warm. Stay hydrated.")
    else:
        print("It's hot outside! Keep yourself cool.")

if __name__ == "__main__":
    main()




# 🌟 Exercise 2: Star Wars Quiz


data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]

def quiz():
    correct_answers = 0
    wrong_answers = []

    for question_data in data:
        question = question_data["question"]
        answer = question_data["answer"]

        user_answer = input(question + " ")

        if user_answer.lower() == answer.lower():
            correct_answers += 1
        else:
            wrong_answers.append({"question": question, "user_answer": user_answer, "correct_answer": answer})

    print(f"\nYou got {correct_answers} out of {len(data)} questions correct.")

    if len(wrong_answers) > 0:
        print("\nYou answered the following questions incorrectly:")
        for wrong_answer in wrong_answers:
            print(f"Question: {wrong_answer['question']}")
            print(f"Your Answer: {wrong_answer['user_answer']}")
            print(f"Correct Answer: {wrong_answer['correct_answer']}\n")

        if len(wrong_answers) > 3:
            print("You had more than 3 wrong answers. You can play again if you want.")

if __name__ == "__main__":
    quiz()





# 🌟 Exercise 3: When Will I Retire?


def get_age(year, month, day):
    current_year = 2023  # Replace this with the current year
    current_month = 8    # Replace this with the current month

    age = current_year - year
    if month > current_month:
        age -= 1

    return age

def can_retire(gender, date_of_birth):
    year, month, day = map(int, date_of_birth.split('/'))
    age = get_age(year, month, day)

    if gender == 'm' and age >= 67:
        return True
    elif gender == 'f' and age >= 62:
        return True
    else:
        return False

def main():
    gender = input("Please enter your gender (m/f): ").lower()
    date_of_birth = input("Please enter your date of birth (yyyy/mm/dd): ")

    if can_retire(gender, date_of_birth):
        print("Congratulations! You can retire.")
    else:
        print("Sorry, you are not eligible to retire yet.")

if __name__ == "__main__":
    main()







    
# 🌟 Exercise 4:


def calculate_sum(X):
    # Convert X to a string to perform string concatenation
    X_str = str(X)

    # Calculate the values of X, XX, XXX, and XXXX
    X_value = int(X_str)
    XX_value = int(X_str + X_str)
    XXX_value = int(X_str + X_str + X_str)
    XXXX_value = int(X_str + X_str + X_str + X_str)

    # Calculate the sum of X + XX + XXX + XXXX
    total_sum = X_value + XX_value + XXX_value + XXXX_value

    return total_sum

if __name__ == "__main__":
    X = int(input("Enter a number (X): "))
    result = calculate_sum(X)
    print(f"The result of {X} + {X}{X} + {X}{X}{X} + {X}{X}{X}{X} is: {result}")