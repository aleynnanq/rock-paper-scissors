const rockButton = document.createElement("button");
rockButton.textContent = "Rock";

const paperButton = document.createElement("button");
paperButton.textContent = "Paper";

const scissorsButton = document.createElement("button");
scissorsButton.textContent = "Scissors";

const container = document.getElementById("container");
container.appendChild(rockButton);
container.appendChild(paperButton);
container.appendChild(scissorsButton);

const message = document.createElement("div");
container.appendChild(message);

const results = document.createElement("div");
container.appendChild(results);

const playAgain = document.createElement("button");
playAgain.textContent = "Play Again";
playAgain.addEventListener("click", playGame);
container.appendChild(playAgain);

function getComputerChoice() {
  const randomDecimal = Math.random() * 3 + 1;
  const randomValue = Math.floor(randomDecimal);

  switch (randomValue) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

function resetGame() {
  rockButton.disabled = false;
  paperButton.disabled = false;
  scissorsButton.disabled = false;
  playAgain.style.display = "none";

  message.textContent = "Select an option to start!";
  results.textContent = "";
}

function playGame() {
  rockButton.addEventListener("click", () => playRound("rock"));
  paperButton.addEventListener("click", () => playRound("paper"));
  scissorsButton.addEventListener("click", () => playRound("scissors"));

  resetGame();

  let humanScore = 0;
  let computerScore = 0;

  function winnerExists(humanScore, computerScore) {
    if (humanScore === 5) {
      console.log("Human won! Computer is a loser!");
      return true;
    } else if (computerScore === 5) {
      console.log("Computer won! Human is a loser!");
      return true;
    } else {
      return false;
    }
  }

  function playRound(humanChoice) {
    console.log("hum:", humanChoice);

    let computerChoice = getComputerChoice();
    console.log("comp:", computerChoice);

    if (humanChoice === computerChoice) {
      console.log(
        `It's a tie! Human: ${humanScore} Computer: ${computerScore}`
      );
      message.textContent = "It's a tie!";
      results.textContent = `Human: ${humanScore} Computer: ${computerScore}`;
      return;
    }

    if (
      (humanChoice === "rock" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "rock")
    ) {
      computerScore++;
      console.log(
        `Computer wins! Human: ${humanScore} Computer: ${computerScore}`
      );

      if (winnerExists(humanScore, computerScore)) {
        message.textContent = "Game over! Computer wins.";
        results.textContent = `Human: ${humanScore} Computer: ${computerScore}`;
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        playAgain.style.display = "block";
      } else {
        message.textContent = "Computer wins!";
        results.textContent = `Human: ${humanScore} Computer: ${computerScore}`;
      }

      return;
    }

    if (
      (computerChoice === "rock" && humanChoice === "paper") ||
      (computerChoice === "paper" && humanChoice === "scissors") ||
      (computerChoice === "scissors" && humanChoice === "rock")
    ) {
      humanScore++;
      console.log(
        `Human wins! Human: ${humanScore} Computer: ${computerScore}`
      );
      if (winnerExists(humanScore, computerScore)) {
        message.textContent = "Game over! Human wins.";
        results.textContent = `Human: ${humanScore} Computer: ${computerScore}`;
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        playAgain.style.display = "block";
      } else {
        message.textContent = "Human wins!";
        results.textContent = `Human: ${humanScore} Computer: ${computerScore}`;
      }
      return;
    }

    console.log("this line is running");
  }

  /*
  playRound();
  playRound();
  playRound();
  if (checkWinner(humanScore, computerScore)) {
    return;
  }
  playRound();
  if (checkWinner(humanScore, computerScore)) {
    return;
  }
  playRound();
  if (checkWinner(humanScore, computerScore)) {
    return;
  } else {
    console.log("It's a tie! Play again.");
  }
  */

  console.log("End of playGame");
}

playGame();
