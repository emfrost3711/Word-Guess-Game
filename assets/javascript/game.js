    
    var wins = 0;
    var directionsText = document.getElementById("directions");
    var winsText = document.getElementById("wins");
    var currentWord = document.getElementById("word")
    var lettersGuessed = document.getElementById("userGuess")
    var badassLadies = [
        "jane austen", 
        "cleopatra",
        "beyonce",
        "michelle obama",
        "oprah",
        "frida kahlo"];
    var word = badassLadies[Math.floor(Math.random() * badassLadies.length)];
    var answerArray = [];
    for (var i = 0; i < badassLadies.length; i++) {
        answerArray[i] = "_";
    }
    var remainingLetters = badassLadies.length;

    //Maybe do badass ladies in history? and their name & a quote pops up
    //need variables for "Press any key to get started!" (then that should disappear after the game starts)
    //var: wins; var: current word; var: number of guesses remaining; var: letters already guessed:
    //images to change when they get the answer right

    //Pick a badass lady
    //While the word has not been guessed {
    //     show the player their current Progress 
    //     get a guess from the player 

    //     if the player wants to quite the game {
    //         quit the game
    //     }
    //     else if the guess is not a single letter {
    //         tell the player to pick a single letter
    //     }
    //     else {
    //         if the guess is in the word {
    //             update hte player's progress with the guess
    //         }
    //     }
    // }

    //if user guesses same letter >1 no change to number of guesses remaining

    //then var text to appear at top with the answer
    
    //could further complicate it by offering an alert "hint" if they get down to only 3 letter guesses left;

    //This is our first badass lady: Jane Austen. 
    document.onkeyup = function(event) {
        var userGuess = event.key.toLowerCase();
    
        if (userGuess === "j") //insert "j" into " _ _ _ _  _ _ _ _ _ _ "
        {

        } else {
            document.write () //add the letter to letters guessed AND move the guesses remaining number down 1
        }
    }