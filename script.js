
let rockPaperScissorArr = ["Rock", "Paper", "Scissors"]
function getComputerChoice() {
    let randChoice = Math.floor(Math.random() * 3)
    switch (randChoice) {
        case 0:
            return rockPaperScissorArr[0]
            break;
        case 1:
            return rockPaperScissorArr[1]
            break;
        case 2:
            return rockPaperScissorArr[2]
            break;
    }
}
function compareChoice(playerChoice) {
    let computerResult = getComputerChoice()
    console.log(computerResult)
    if (playerChoice == "Rock" && computerResult == "Scissors") {
        return "You chose rock and the computer chose scissors. You win!"
    } else if (playerChoice == "Rock" && computerResult == "Paper") {
        return "You chose rock and the computer chose paper. You lost..."
    } else if (playerChoice == "Rock" && computerResult == "Rock") {
        return "You both chose rock. It's a draw!"
    }
}
function capitalize(word) {
    let firstLetterUpper = word.charAt(0).toUpperCase()
    let remainingLetters = word.slice(1)
    let result = firstLetterUpper + remainingLetters
    return result
}

function startGame() {
    let playerInput = prompt("Please select rock, paper or scissors.")
    let gameResult = compareChoice(capitalize(playerInput));
    //console.log(playerInput);
    console.log(gameResult)
}

startGame()