// This is a simple Rock-Paper-Scissors game where the user plays against the computer.
// The user is prompted to enter their choice, and the computer randomly selects its choice.
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {
  let result = "";

  if (humanChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    result = `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    result = `You lose! ${computerChoice} beats ${humanChoice}`;
  }

  updateResult(result);
  updateScore();

  if (humanScore === 5 || computerScore === 5) {
    let finalMessage =
      humanScore === 5 ? "🎉 You won the game!" : "😢 You lost the game!";
    updateResult(result + " " + finalMessage);
    disableButtons();
  }
}

function updateResult(message) {
  document.getElementById("result").textContent = message;
}

function updateScore() {
  document.getElementById(
    "score"
  ).textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
}

function disableButtons() {
  document.getElementById("rock").disabled = true;
  document.getElementById("paper").disabled = true;
  document.getElementById("scissors").disabled = true;
}

// Event listeners for buttons
document.getElementById("rock").addEventListener("click", function () {
  playRound("rock", getComputerChoice());
});
document.getElementById("paper").addEventListener("click", function () {
  playRound("paper", getComputerChoice());
});
document.getElementById("scissors").addEventListener("click", function () {
  playRound("scissors", getComputerChoice());
});
