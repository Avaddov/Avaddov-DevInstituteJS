function hangman() {
  var theword = prompt("give me the word"); //player guesses word
  theword = theword.toLowerCase(); //forces lowercase to avoid errors
  var wordstar = []; //hides the word
  var try10 = 10; // 10 tries
  var find = false; //boolean to set incorrect guess
  var wrongletters = []; //store incorrectly guessed letters
  var remainletters = theword.length;

  //convert word to stars
  for (var i = 0; i < theword.length; i++) {
    //loop to convert characters to stars
    wordstar[i] = "*"; //iterate stars
  }
  console.log(wordstar);

  // while loop for when remaining letters > 0 to continue guesses
  while (remainletters > 0) {
    var letterguess = prompt("give me a letter!"); //asks user to guess a letter
    find == false; //incorrect guess

    if (try10 < 1) {
      alert("GAME OVER"); //Out of guesses
      break; //stops loop
    } else if (letterguess == null) {
      //anti-bug to make sure they pick a letter
      break;
    } else if (letterguess.length !== 1) {
      //prevents user from picking more than 1
      console.log("1 Letter only!!!"); //response if more than one letter is chosen
    } else if (
      wrongletters.includes(letterguess) == true ||
      wordstar.includes(letterguess) == true
    ) {
      //to check if user inputs repeated letter
      console.log(
        "You already guessed that letter! Remaining guesses " + try10
      );
      find == false; //
    } else if (
      theword.includes(letterguess) == false &&
      wordstar.includes(letterguess) == false
    ) {
      //incorrect guess
      try10 = try10 - 1; //subtracts remaining guesses
      find == false;
      wrongletters.push(letterguess); //stores incorrect guess
      if (try10 == 0) {
        alert("GAME OVER"); //Out of guesses
        break;
      } else {
        console.log("Wrong letter. Guess again! Remaining guesses " + try10);
        console.log("Previous guesses " + wrongletters);
      }
    } else {
      //Correct Guess
      for (var j = 0; j < theword.length; j++) {
        //j = new iterater
        if (theword[j] == letterguess) {
          //j finds the possition of each letter in theword to see if letterguess==true
          wordstar[j] = letterguess; //unhides correct guess (star to letter)
          remainletters = remainletters - 1;
          find = true;
          console.log(wordstar); //output correct guess with remaining stars
        }
      }
      if (find == false) {
        try10 = try10 - 1; //checks if find is still false and decreases a remaining guess
      }
    }
  }

  if (remainletters == 0) {
    find == false;
    alert("CONGRATION! YOU HAVE BEEN AWARDED A HIM!!! :D"); //victory statement
  }
}
hangman();
