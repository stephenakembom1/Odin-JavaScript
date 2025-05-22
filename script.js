// This is a simple Rock-Paper-Scissors game where the user plays against the computer.
// The user is prompted to enter their choice, and the computer randomly selects its choice.
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];

}
console.log(getComputerChoice());

function getHumanChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let choice;

    do {
        choice = prompt("Enter your choice (rock, paper, scissors):").toLowerCase();
    } while (!choices.includes(choice));
    return choice;
}
console.log(getHumanChoice());

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
}
console.log(playRound(getHumanChoice(), getComputerChoice()));

function playgame() {
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
    }

    if (humanScore > computerScore) {
        console.log(`You win the game! Final score: You ${humanScore} - Computer ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`You lose the game! Final score: You ${humanScore} - Computer ${computerScore}`);
    } else {
        console.log(`It's a tie! Final score: You ${humanScore} - Computer ${computerScore}`);
    }
}
playgame();
// This code implements a simple Rock-Paper-Scissors game where the user plays against the computer.
// The user is prompted to enter their choice, and the computer randomly selects its choice.
// The game is played for 5 rounds, and the final score is displayed at the end.
// The game logic is implemented in the playRound function, which determines the winner based on the choices made.
// The getComputerChoice function randomly selects the computer's choice from the available options.
// The getHumanChoice function prompts the user to enter their choice and validates the input.