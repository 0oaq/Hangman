const guessBox = document.getElementById("guessBox");
let Human = document.getElementById("manual")
let Computer = document.getElementById("computer")
let mysteryWord = document.getElementById("changingWord");
let guessClicked = false;
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
        guessBox.value = (letter);
    }
    guessClicked = true;
}

if (document.URL.includes("Hangman.html?userFlag=0")){

    let wordInput = prompt("hello");

    function setGuessWord(InNewString) {
        mysteryWord.innerHTML = InNewString; 
    }
    setGuessWord(wordInput);

    console.log(wordInput.length)
}

let testWord ="Foo Bar"
for (let i=0; i<testWord.length; i++)
{
    let curChar = testWord.charAt(i);
    
    let bLowerCaseLetter = (curChar >= 'a') && (curChar <='z');
    let bUpperCaseLetter = (curChar >= 'A') && (curChar <= 'Z');
    if(bLowerCaseLetter || bUpperCaseLetter){
        curChar = "_"
    }



    console.log(curChar);

}
const reg = /[a-zA-Z]/g
let testWordReplace = testWord.replace(reg, "_")
console.log("FFFFFFFUFFFFF");
console.log(testWordReplace);

/*
Add edit box for new key
Respond to Key or "Enter"
Check key against secret word
Display "correct"/"incorrect"
Increment how many wrong answers

Note which letters have already been guessed
Drawing of the body
*/