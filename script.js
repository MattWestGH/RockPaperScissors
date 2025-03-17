
let rockPaperScissorArr = ["Rock", "Paper", "Scissors"]
let playerScore = 0;
let computerScore = 0;
const rpsDiv = document.createElement("div");
const body = document.body;
const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");
scissorsBtn.textContent = "Scissors";
rockBtn.textContent = "Rock";
paperBtn.textContent = "Paper";
rpsDiv.appendChild(rockBtn);
rpsDiv.appendChild(paperBtn);
rpsDiv.appendChild(scissorsBtn);
rockBtn.setAttribute("onclick", "rockBtnSubmit()")
paperBtn.setAttribute("onclick", "paperBtnSubmit()")
scissorsBtn.setAttribute("onclick", "scissorsBtnSubmit()")

function rockBtnSubmit() { console.log("rock") }
function paperBtnSubmit() { console.log("paper") }
function scissorsBtnSubmit() { console.log("scissors") }
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
        playerScore++
        return "You chose rock and the computer chose scissors. You win!"
    } else if (playerChoice == "Scissors" && computerResult == "Paper") {
        playerScore++
        return "You chose scissors and the computer chose paper. You win!"
    } else if (playerChoice == "Paper" && computerResult == "Rock") {
        playerScore++
        return "You chose paper and the computer chose rock. You win!"
    } else if (playerChoice == "Rock" && computerResult == "Paper") {
        computerScore++
        return "You chose rock and the computer chose paper. You lost..."
    } else if (playerChoice == "Paper" && computerResult == "Scissors") {
        computerScore++
        return "You chose paper and the computer chose scissors. You lost..."
    } else if (playerChoice == "Scissors" && computerResult == "Rock") {
        computerScore++
        return "You chose scissors and the computer chose rock. You lost..."
    } else if (playerChoice == "Rock" && computerResult == "Rock") {
        return "You both chose rock. It's a draw!"
    } else if (playerChoice == "Paper" && computerResult == "Paper") {
        return "You both chose paper. It's a draw!"
    } else if (playerChoice == "Scissors" && computerResult == "Scissors") {
        return "You both chose scissors. It's a draw!"
    }

}
function capitalize(word) {
    let firstLetterUpper = word.charAt(0).toUpperCase()
    let remainingLetters = word.slice(1)
    let result = firstLetterUpper + remainingLetters
    return result
}
function nextRound() {
    let newGame = capitalize(prompt("Would you like to play again?"));
    if (newGame == "Yes") {
        startGame();
    } else if (newGame == "No") {
        console.log("Final Score:")
        console.log("Player: " + playerScore);
        console.log("Computer: " + computerScore);
        console.log("Thank you for playing!");
    } else { nextRound() }
}
// I want to use this to update the score after every round and reflect on the page.
//function updateScore() { }
function startGame() {
    document.getElementById("startBtn").remove()
    body.appendChild(rpsDiv);
    //while (playerScore <= 5 || computerScore <= 5) {

    //    //let playerInput = prompt("Please select rock, paper or scissors.")
    //    //let gameResult = compareChoice(capitalize(playerInput));
    //    //console.log(gameResult)
    //    //console.log("Score");
    //    //console.log("Player: " + playerScore);
    //    //console.log("Computer: " + computerScore);
    //    //nextRound();
    //}

}