print("Welcome to a game of Trivia")

ans = input("Are you ready to play? y/n")
score = 0
total_q = 4
if ans.lower() == "yes" or ans.lower() == 'y':
    ans = input("What is the capitol of Turkey?")
    if ans == "Istanbul":
        score += 1
        print("Correct")
    else:
        print("Incorrect")
    
    ans = input("What is the capitol of Great Britain?")
    if ans == "London":
        score += 1
        print("Correct")
    else:
        print("Incorrect")
    
    ans = input("What is the capitol of Austria?")
    if ans == "Vienna":
        score += 1
        print("Correct")
    else:
        print("Incorrect")
    
    ans = input("What is the capitol of Cuba?")
    if ans == "Havana":
        score += 1
        print("Correct")
    else:
        print("Incorrect")
    
print("You got ", score,"points")
if score / 100 * 100  == 0:
    print("You failed all the questions, you loose!")
elif score / 100 * 25 == 25:
    print("You only got 25% correct, sorry, you lose")
elif score / 100 * 50 == 50:
    print("You got 50%, not too bad.")
elif score / 100 * 75 == 75:
    print("You got 75%, well done.")
else:
    print("You got them all correct, excellent work, well done!")

    
    
    
    