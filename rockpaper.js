let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
  let humanChoice = prompt("Choose one: rock, paper or scissors:")
  return humanChoice;
}

function getComputerChoice(min, max) {
  // return rock paper scissors randomly using math function
  // let rock = 1;
  // let paper = 2;
  // let scissor = 3;
  let computerChoice = Math.floor(Math.random() * (max - min) + min);
  return computerChoice;
}

console.log(getComputerChoice(1, 4));

function convertHumanChoice(humanChoice) {
  if (humanChoice.toLowerCase() == "rock") {
    return 1;
  } else if (humanChoice.toLowerCase() == "paper") {
    return 2;
  } else if (humanChoice.toLowerCase() == "scissors") {
    return 3;
  }
  return 0;
}

function scenerio1(humanChoice, computerChoice) {
  if (humanChoice == 1 && computerChoice == 2) {
    console.log("You lose! Paper beats Rock"); // 1 is loss
    return 1;
  } else if (humanChoice == 2 && computerChoice == 1) {
    console.log("You Win! Paper beats Rock"); // 2 is a win
    return 2;
  }
}

function scenerio2(humanChoice, computerChoice) {
  if (humanChoice == 1 && computerChoice == 3) {
    console.log("You Win! Rock beats Scissors"); // 2 is win
    return 2;
  } else if (humanChoice == 3 && computerChoice == 1) {
    console.log("You Lose! Rock beats Scissors"); // 1 is a loss
    return 1;
  }
}

function scenerio3(humanChoice, computerChoice) {
  if (humanChoice == 2 && computerChoice == 3) {
    console.log("You Lose! Scissors beats Paper"); // 1 is loss
    return 1;
  } else if (humanChoice == 3 && computerChoice == 2) {
    console.log("You Win! Scissors beats Paper"); // 2 is a win
    return 2;
  }
}

function scenerio4(humanChoice, computerChoice) {
  if ((humanChoice == 1 && computerChoice == 1) || (humanChoice == 2 && computerChoice == 2) || (humanChoice == 3 && computerChoice == 3)) {
    console.log("Its a Tie!");
    return 0;
  }
}

function playRound(humanChoice, computerChoice) {
  let convertedHC = convertHumanChoice(humanChoice);
  let outcome;
  if ((convertedHC == 1 && computerChoice == 2) || (convertedHC == 2 && computerChoice == 1)) {
    // scenerio1(convertedHC, computerChoice);
    outcome = scenerio1(convertedHC, computerChoice);
    return outcome;
  }
  if ((convertedHC == 1 && computerChoice == 3) || (convertedHC == 3 && computerChoice == 1)) {
    outcome = scenerio2(convertedHC, computerChoice);
    return outcome;
  }
  if ((convertedHC == 2 && computerChoice == 3) || (convertedHC == 3 && computerChoice == 2)) {
    outcome = scenerio3(convertedHC, computerChoice);
    return outcome;
  } else {
    outcome = scenerio4;
    return outcome;
  }
}

const playerSelection = getHumanChoice();
const computerSelection = getComputerChoice(1, 4);

console.log(convertHumanChoice(playerSelection))

playRound(playerSelection, computerSelection);