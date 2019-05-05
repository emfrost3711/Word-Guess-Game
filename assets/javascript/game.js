      //Maybe do badass ladies in history? and their name & a quote pops up
       //var: wins; var: current word; var: number of guesses remaining; var: letters already guessed:
    var wins = 0;
    var losses = 0; 
    var directionsText = document.getElementById("directions");
    var winsText = document.getElementById("wins");
    var lossesText = document.getElementById("losses");
    var currentWord = document.getElementById("word");
    var lettersGuessed = []; 
    var losses = document.getElementById("losses"); 
    var badassLadies = [
        "jane austen", 
        "cleopatra",
        "beyonce",
        "michelle obama",
        "oprah",
        "frida kahlo"];
    var answerArray = [];
    var word ;
    var remainingGuesses = 10;

    function baseValues () { 
    word = badassLadies[Math.floor(Math.random() * badassLadies.length)];
    for (var i = 0; i < word.length; i++) {
        //if there is a space it puts a space in the answer array; if it's a letter it puts a _ in
      if (word[i]===" ") {
        answerArray.push(" ");
      } 
      else {answerArray.push("_");}
    } console.log(answerArray);
    var visibleWord = answerArray.join(' ');
    var individualWords = visibleWord.split(' '); 
        console.log(individualWords);
      //puts the _ _ _ on the page in the answer array 
    currentWord.innerText = visibleWord; 
        console.log(answerArray.length);
    remainingGuesses = 10; 
    console.log(word)
    //need variables for "Press any key to get started!" (then that should disappear after the game starts)
    }

    baseValues(); 
    //game loop here
    if (remainingGuesses > 0) {
    winsText.textContent = wins;
    lossesText.textContent = losses;

    //     show the player their current Progress 
    //     get a guess from the player 
        //take input guess from the player
        //update answerArray and remainingLetters for every correct guess
    //         if the guess is in the word {
    //             update the player's progress with the guess
    //  
    // if userGuess is wrong then push userGuess to lettersGuessed array AND print the array in the span with the id of lettersGuessed
    //if user guesses same letter >1 no change to number of guesses remaining**** don't fret over this

    //then var text to appear at top with the answer

    //This is our first badass lady: Jane Austen. 
    document.onkeyup = function(event) {
        var userGuess = event.key.toLowerCase();
        if(answerArray.includes (userGuess)) {
            //check if the value at each index is equal to a certina indeax; you can do a for loop or a for each here. 
            //loop through the answer array; inside of the for loop (or for each) check to see if the letter at each index with that; then fill it in
          
        }
    }
    }