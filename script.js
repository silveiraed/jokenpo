function getPlayerSelection() {
  let playerSelection = prompt(
    "What do you choose? Rock, paper or scissors?"
  ).toUpperCase();
  return playerSelection;
}

function getComputerChoice() {
  let computerChoice = [0, 1, 2];
  let randomComputerChoice = [
    Math.floor(Math.random() * computerChoice.length),
  ];

  if (randomComputerChoice == 0) {
    randomComputerChoice = "ROCK";
  } else if (randomComputerChoice == 1) {
    randomComputerChoice = "PAPER";
  } else {
    randomComputerChoice = "SCISSORS";
  }
  return randomComputerChoice;
}

let x = getComputerChoice();
let y = getPlayerSelection();

let playerScore = 0;
let computerScore = 0;
let generalScore = 0;

function score() {
  if (
    (x == "ROCK" && y == "SCISSORS") ||
    (x == "PAPER" && y == "ROCK") ||
    (x == "SCISSORS" && y == "PAPER")
  ) {
    return computerScore++;
  } else if (
    (y == "ROCK" && x == "SCISSORS") ||
    (y == "PAPER" && x == "ROCK") ||
    (y == "SCISSORS" && x == "PAPER")
  ) {
    return playerScore++;
  }
  return generalScore++;
}

let result = score();

console.log("Computer choice: " + x);
console.log("Player choice: " + y);
console.log("The computer score is: " + computerScore);
console.log("The player score is: " + playerScore);
console.log("Rounds played: " + score());
