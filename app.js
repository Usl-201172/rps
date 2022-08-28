const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('Result')
const possibleChoice = document.querySelectorAll('button')
let userChoice
let computerChoice

possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1

  if (randomNumber === 1) {
    computerChoice = 'Rock'
  }
  if (randomNumber === 2) {
    computerChoice = 'Scissors'
}
if (randomNumber === 3) {
    computerChoice = 'Paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
    Result = "it's a Draw!"
    }
        if (computerChoice === 'Rock' && userChoice === "Paper") {
    Result = "You Win!"
 }
    if (computerChoice === 'Rock' && userChoice === "Scissors") {
    Result = "You Lose!"
 } 
    if (computerChoice === 'Paper' && userChoice === "Scissors") {
    Result = "You Win!"
}
if (computerChoice === 'Paper' && userChoice === "Rock") {
    Result = "You Lose!"
}
if (computerChoice === 'Scissors' && userChoice === "Rock") {
    Result = "You Win!"
}
if (computerChoice === 'Scissors' && userChoice === "Paper") {
    Result = "You Lose!"
}
resultDisplay.innerHTML = Result
}