let pastGuesses = document.getElementById("pastGuesses")
let Human = document.getElementById("manual")
let Computer = document.getElementById("computer")
let mysteryWord = document.getElementById("changingWord");
let guessClicked = false;
let guesses = []
let wordInput = ""
// listing out every variable so I can call them later

String.prototype.replaceAt = function(index, replacement)
// Add a member function to String that replaces characters starting at index with the replacement string
{
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
      //this.substring(0, index) returns the string to the left of the index 
  //    "tiger".substring(0, 2) returns "ti"
  //this.substring(index + replacement.length) returns the string to the right of the index AND the replacement string
  //    if replacement string of "zz"
  //    "tiger.substring(2+2) returns "r"
}

function onGuessClick(letter) {
    letter.toUpperCase
    if (guessClicked == false) {
        guesses.push(letter);
        for (let i = 0; i < wordInput.length; i++){
            if(wordInput[i] === letter) {
                mysteryWord.innerHTML = mysteryWord.innerHTML.replaceAt(i, letter);
            } 
        }
    }
    pastGuesses.innerHTML = guesses
  
}
// upends the value of every button clicked to the array "guesses"

if (document.URL.includes("Hangman.html?userFlag=0")) {

    wordInput = prompt("hello").toUpperCase();

    function setGuessWord(InNewString) {
        mysteryWord.innerHTML = InNewString;
    }

    // checks the URL to determine which button was clicked on the home screen. If the human button was clicked, provides a prompt for someone else to guess a word

    const reg = /[a-zA-Z]/g
    let wordInputReplace = wordInput.replace(reg, "_")

    setGuessWord(wordInputReplace);
}
// changes every index of the word that is a letter to an underscore














/*
Add edit box for new key
Respond to Key or "Enter"
Check key against secret word
Display "correct"/"incorrect"
Increment how many wrong answers

Note which letters have already been guessed
Drawing of the body
*/