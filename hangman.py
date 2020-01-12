import random

def welcomeScreen():
    name = input("Plese enter your name:")
    print("Hello ", name, "Welcome to a simple hangman game.")
    print("##################################")
    print("Try to guess the word in 10 tries or less or hang")
    hangman()
    
    print()
    
def hangman():
    word = random.choice(["Saab", "Stilton", "Pine", "Cardinal","Spire", "Ocean", "Orchid", "Gothic", "Cannon", "Friedrich", "Dome", "Gold", "Law", "Bastion"])
    validLetters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQURSTUVWXYZ'
    turns = 10
    guessed = ''
    
    while len(word) > 0:
        msg = ''
        missed = 0
        for letter in word:
            if letter in guessed:
                msg = msg + letter
            else:
                msg = msg + "_" + " "
                missed += 1
        if msg == word:
            print(msg)
            print("Contratulations, you won with the word: ", word)
            break
        print("Guess the word: ")
        guess = input()
        
        if guess in validLetters:
            guessed = guessed + guess
        else:
            print("Please enter a valid letter: ")
            guess = input()
        
        if guess not in word:
            turns = turns -1
            if turns == 9:
                print(" o")
            
            if turns == 8:
                print(" o")
                print(" |")
            
            if turns == 7:
                print(" o")
                print(" |")
                print("  \ ")
            
            if turns == 6:
                print(" o")
                print(" |")
                print("/ \ ")
                
                
            if turns == 5:
                print(" O")
                print(" |")
                print("/ \_")
                
            if turns == 4:
                print("   0")
                print("   |")
                print(" _/ \_ ")
            
            if turns == 3:
                print("  0")
                print(" -|")
                print("_/ \_")
            if turns == 2:
                print("   0")
                print("  -|-")
                print(" _/ \_")
            if turns == 1:
                print("You have failed to guess the word: ", word, ". You hang!")
                break
            
welcomeScreen()

