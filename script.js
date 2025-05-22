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