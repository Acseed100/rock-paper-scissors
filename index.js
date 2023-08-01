function playRound(playerSelection, computerSelection) {
  console.log("Player's choice is: " + playerSelection + "\nComputer's choice is: " + computerSelection);

  switch (playerSelection + "-" + computerSelection) {
    case 'rock-paper':
      return "You lost :( Paper beats rock";
      break;

    case 'rock-scissors':
      return "You won! Rock beats scissors";
      break;

    case 'paper-rock':
      return "You won! Paper beats rock";
      break;

    case 'paper-scissors':
      return "You lost :( Scissors beat paper"
      break;

    case 'scissors-rock':
      return "You lost :( Rock beats scissors";
      break;

    case 'scissors-paper':
      return "You won! Scissors beat paper"
      break;

    default:
      return "Draw";
      break;
  }

}

let selections = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let computerChoice = selections[Math.floor(Math.random() * 3)]; // getting a random number between 0 & 2
  return computerChoice;
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));