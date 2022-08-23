let Human = document.getElementById("manual")
let Computer = document.getElementById("computer")



function onHumanClick() {

    let wordInput = prompt("hello");
   

    //console.log(wordInput)


    function setGuessWord(InNewString) {
        let mysteryWord = document.getElementById("changingWord");
        mysteryWord.innerHTML = InNewString;
    }

    setGuessWord(wordInput);
   
}




let bodyPieces = [
    { name: "head", orderIndex: 0 },
    { name: "torso", orderIndex: 1 },
    { name: "leftLeg", orderIndex: 2 },
    { name: "rightLeg", orderIndex: 3 },
    { name: "leftArm", orderIndex: 4 },
    { name: "rightArm", orderIndex: 5 },
]


const guessBox = document.getElementById("guessBox");


let guessClicked = false;

function onGuessClick(letter) {
    if (guessClicked == false) {
        guessBox.value = (letter);
    }
    guessClicked = true;
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