// make the computer selecion - ok
// make the player selection
// save the score

function getComputerChoice(n) {
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

function getPlayerSelection(thePlayerSelecion) {
  let playerSelection = prompt(
    "What do you choose? Rock, paper or scissors?"
  ).toUpperCase();
  return playerSelection;
}

let y = getPlayerSelection();

function playRound(getComputerChoice, playerSelection) {
  console.log("Computer choice: " + x);
  console.log("Player choice: " + y);
}
