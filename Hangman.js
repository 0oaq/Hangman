let pastGuesses = document.getElementById("pastGuesses")
let Human = document.getElementById("manual")
let Computer = document.getElementById("computer")
let mysteryWord = document.getElementById("changingWord");
let guessClicked = false;
let guesses = []
let bodyPieces = [
    { name: "head", orderIndex: 0 },
    { name: "torso", orderIndex: 1 },
    { name: "leftLeg", orderIndex: 2 },
    { name: "rightLeg", orderIndex: 3 },
    { name: "leftArm", orderIndex: 4 },
    { name: "rightArm", orderIndex: 5 },
]


function onGuessClick(letter) {
    if (guessClicked == false) {
       guesses.push(letter);
    }
 pastGuesses.innerHTML = guesses
}

if (document.URL.includes("Hangman.html?userFlag=0")) {

    let wordInput = prompt("hello");

    function setGuessWord(InNewString) {
        mysteryWord.innerHTML = InNewString;
    }

    const reg = /[a-zA-Z]/g
    let wordInputReplace = wordInput.replace(reg, "_")

    setGuessWord(wordInputReplace);
}

/*
Add edit box for new key
Respond to Key or "Enter"
Check key against secret word
Display "correct"/"incorrect"
Increment how many wrong answers

Note which letters have already been guessed
Drawing of the body
*/