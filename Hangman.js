
let bodyPieces = [
    { name: "head", orderIndex: 0 },
    { name: "torso", orderIndex: 1 },
    { name: "leftLeg", orderIndex: 2 },
    { name: "rightLeg", orderIndex: 3 },
    { name: "leftArm", orderIndex: 4 },
    { name: "rightArm", orderIndex: 5 },
]

function setDebugString(InNewString) {
    let debugging = document.getElementById("debugString");
    debugging.innerHTML = InNewString
}

setDebugString("<p>WE NEED TO BUILD A WALL</p>")

const guessBox = document.getElementById("guessBox");
const testGuess = document.getElementById("A");

let guessClicked = false






/*
Add edit box for new key
Respond to Key or "Enter"
Check key against secret word
Display "correct"/"incorrect"
Increment how many wrong answers

Note which letters have already been guessed
Drawing of the body
*/