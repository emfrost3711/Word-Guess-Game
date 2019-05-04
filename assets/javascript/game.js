      //Maybe do badass ladies in history? and their name & a quote pops up
       //var: wins; var: current word; var: number of guesses remaining; var: letters already guessed:
    var wins = 0;
    var losses = 0; 
    var directionsText = document.getElementById("directions");
    var winsText = document.getElementById("wins");
    var currentWord = document.getElementById("word");
    var lettersGuessed = document.getElementById("userGuess");
    var losses = document.getElementById("losses"); 
    var badassLadies = [
        "jane austen", 
        "cleopatra",
        "beyonce",
        "michelle obama",
        "oprah",
        "frida kahlo"];
    var answerArray = [];
    var word 

    function baseValues () { 
    word = badassLadies[Math.floor(Math.random() * badassLadies.length)];
    for (var i = 0; i < word.length; i++) {
        //if there is a space it puts a space in the answer array; if it's a letter it puts a _ in
      if (word[i]===" ") {
        answerArray.push(" ");
      } 
      else {answerArray.push("_");}
    }
      //puts the _ _ _ on the page in the answer array 
    currentWord.textContent = answerArray.join(' ');
        console.log(answerArray.length)
    var remainingGuesses = 10; 
    console.log(word)
    //need variables for "Press any key to get started!" (then that should disappear after the game starts)
    }

    baseValues(); 
    //game loop here
    // while (remainingLetters > 0) {
        //game code goes here
        //show the player their progress
        //take input guess from the player
        //update answerArray and remainingLetters for every correct guess
    // }


    //images to change when they get the answer right

    //Computer picks a badass lady
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
    //             update the player's progress with the guess
    //         }
    //     }
    // }

    //if user guesses same letter >1 no change to number of guesses remaining

    //then var text to appear at top with the answer
    
    //could further complicate it by offering an alert "hint" if they get down to only 3 letter guesses left;

    //This is our first badass lady: Jane Austen. 
    document.onkeyup = function(event) {
        var userGuess = event.key.toLowerCase();
        if(answerArray.includes (userGuess)) {
            //check if the value at each index is equal to a certina indeax; you can do a for loop or a for each here. 
            //loop through the answer array; inside of the for loop (or for each) check to see if the letter at each index with that; then fill it in
          
        }
        



        // 
        //go through word; if userguess is a letter in the word, place it in the appropriate slot; use .includes first to see if it exists; if it does then use array indexOf()
        //check to see if array has any underscores
        //if there are no underscores, they win! increase wine count
        //if the guesses remaining is above 0 remove 1 from remaining guesses and log the guess on the page;
        // if guesses = 0, player loses
        // when player loses, alert "You lose"; increase loss count; then reset it. 
            //clear out lettersholldingthing; choose a new string from the badassLadies array; reset answers array; reset guesses to 10;



        // if (userGuess === "j") //insert "j" into " _ _ _ _  _ _ _ _ _ _ "
        // {
            
        // } else {
        //     document.write () //add the letter to letters guessed AND move the guesses remaining number down 1
        // }
    

    }


    //make a new function that incluees setting guesses, letters guessed values, all the base values, puts the dashes on the pages, sets number of guesses picks the word sets the letters they've guessed to a value
    //make a reset function that you can call repeatedly;
