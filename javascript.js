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

/// <summary>
/// - Randomly returns either rock, paper, or scissors
/// </summary>
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

/// <summary>
/// - Takes user input
/// - Returns choice based on input
/// </summary>
function getHumanChoice() {
  const humanChoice = prompt("Rock, paper, or scissors?");

  if (
    humanChoice.toLowerCase() === "rock" ||
    humanChoice.toLowerCase() === "paper" ||
    humanChoice.toLowerCase() === "scissors"
  ) {
    return humanChoice.toLowerCase();
  }
}

/// <summary>
/// - Calls playRound 5 times to play 5 rounds
/// - Keeps score
/// - Announces the game winner
/// </summary>
function playGame() {
  rockButton.addEventListener("click", () => playRound("rock"));
  paperButton.addEventListener("click", () => playRound("paper"));
  scissorsButton.addEventListener("click", () => playRound("scissors"));

  let humanScore = 0;
  let computerScore = 0;

  function checkWinner(humanScore, computerScore) {
    if (humanScore === 3) {
      console.log("Human won! Computer is a loser!");
      return true;
    } else if (computerScore === 3) {
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
}

playGame();
