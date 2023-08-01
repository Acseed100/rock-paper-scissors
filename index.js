function playRound(playerSelection, computerSelection) {
   
    
  }
   let selections = ["rock", "paper", "scissors"];
  function getComputerChoice(){
    let computerChoice = selections[Math.floor(Math.random() * 3)]; // getting a random number between 0 & 2
     return computerChoice;  
}

  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));