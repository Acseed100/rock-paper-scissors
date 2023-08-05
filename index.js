let computerSelection;

        let playerScore = 0;
        let computerScore = 0;

        function playRound(playerSelection, computerSelection) {
            computerSelection = getComputerChoice();

            let result;

            console.log("Player's choice is: " + playerSelection + "\nComputer's choice is: " + computerSelection);

            switch (playerSelection + "-" + computerSelection) {
                case 'rock-paper':
                    result = "You lost :( Paper beats rock";
                    computerScore++;
                    break;

                case 'rock-scissors':
                    result = "You won! Rock beats scissors";
                    playerScore++;
                    break;

                case 'paper-rock':
                    result = "You won! Paper beats rock";
                    playerScore++;
                    break;

                case 'paper-scissors':
                    result = "You lost :( Scissors beat paper";
                    computerScore++;
                    break;

                case 'scissors-rock':
                    result = "You lost :( Rock beats scissors";
                    computerScore++;
                    break;

                case 'scissors-paper':
                    result = "You won! Scissors beat paper";
                    playerScore++;
                    break;

                default:
                    result = "Draw";
                    break;
            }

            // Display result and score on the webpage
            document.getElementById('results').innerText = result;
            document.getElementById('score').innerText = `Player: ${playerScore} | Computer: ${computerScore}`;

            // Announce winner if someone reaches 5 points
            if (playerScore >= 5) {
                document.getElementById('results').innerText = "Congratulations! You are the winner!";
                // Disable buttons to end the game
                rock.disabled = true;
                paper.disabled = true;
                scissors.disabled = true;
            } else if (computerScore >= 5) {
                document.getElementById('results').innerText = "Computer wins! Better luck next time.";
                // Disable buttons to end the game
                rock.disabled = true;
                paper.disabled = true;
                scissors.disabled = true;
            }
        }

        let selections = ["rock", "paper", "scissors"];

        function getComputerChoice() {
            let computerChoice = selections[Math.floor(Math.random() * 3)];
            return computerChoice;
        }

        const rock = document.getElementById("rock");
        const paper = document.getElementById("paper");
        const scissors = document.getElementById("scissors");

        rock.addEventListener("click", () => {
            playRound("rock", computerSelection);
        });

        paper.addEventListener("click", () => {
            playRound("paper", computerSelection);
        });

        scissors.addEventListener("click", () => {
            playRound("scissors", computerSelection);
        });