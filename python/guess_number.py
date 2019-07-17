import random

def get_guess():
    return list(input("What is your guess?"))

def generate():
    print("Welcome Code Breaker! Let's see if you can guess my 3 digit number!")
    a, b, c = random.sample(range(0, 9), 3)
    print("Code has been generated, please guess a 3 digit number!")
    return a, b, c

def check_close(numToCheck, num1, num2):
    return int(numToCheck) == num1 or numToCheck == num2

def check_match(numToCheck, num):
    return int(numToCheck) == num

def check_guess(guess,a,b,c):
    if len(guess) is not 3:
        print("I need a 3 digit number!")
    else:
        print("Here is the result of your guess:")
        if (check_match(guess[0], a) and
            check_match(guess[1], b) and
            check_match(guess[2], c)):
            print("GOT IT!")
            return
        elif (check_match(guess[0], a) or
              check_match(guess[1], b) or
              check_match(guess[2], c)):
            print("Match")
        elif (check_close(guess[0], b, c) or
              check_close(guess[1], a, c) or
              check_close(guess[2], a, b)):
            print("Close")
        else:
            print("Nope")
    check_guess(get_guess(),a,b,c)


def main():
    a,b,c = generate()
    check_guess(get_guess(),a,b,c)
    print("Congrats")


if __name__ == '__main__':
    main()
