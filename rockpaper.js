let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
  let humanChoice = prompt("Choose one: rock, paper or scissors:")
  return humanChoice;
}

function getComputerChoice(min, max) {
  let computerChoice = Math.floor(Math.random() * (max - min) + min);
  return computerChoice;
}

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

function playRound(humanChoice, computerChoice) {
  let convertedHC = convertHumanChoice(humanChoice);

  // First, check for a tie
  if (convertedHC === computerChoice) {
    console.log("Its a Tie!");
    return 0;
  }

  // Then check all winning scenarios
  // Rock beats Scissors
  if ((convertedHC === 1 && computerChoice === 3) ||
    (convertedHC === 3 && computerChoice === 1)) {
    if (convertedHC === 1) {
      console.log("You Win! Rock beats Scissors");
      return 2;
    } else {
      console.log("You Lose! Rock beats Scissors");
      return 1;
    }
  }

  // Paper beats Rock
  if ((convertedHC === 1 && computerChoice === 2) ||
    (convertedHC === 2 && computerChoice === 1)) {
    if (convertedHC === 2) {
      console.log("You Win! Paper beats Rock");
      return 2;
    } else {
      console.log("You Lose! Paper beats Rock");
      return 1;
    }
  }

  // Scissors beats Paper
  if ((convertedHC === 2 && computerChoice === 3) ||
    (convertedHC === 3 && computerChoice === 2)) {
    if (convertedHC === 3) {
      console.log("You Win! Scissors beats Paper");
      return 2;
    } else {
      console.log("You Lose! Scissors beats Paper");
      return 1;
    }
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    console.log(`Round ${i + 1}:`);

    // Get new selection each round
    const playerSelection = getHumanChoice();
    const computerSelection = getComputerChoice(1, 4);

    console.log(`Player chose: ${playerSelection} (${convertHumanChoice(playerSelection)})`);
    console.log(`Computer chose: ${computerSelection}`);

    let outcome = playRound(playerSelection, computerSelection);

    if (outcome === 2) {
      humanScore += 1;
      console.log(`Player Score: ${humanScore}`);
    } else if (outcome === 1) {
      computerScore += 1;
      console.log(`Computer Score: ${computerScore}`);
    } else {
      console.log("Tie! No points awarded.");
    }
  }

  // Determine the overall winner
  console.log("\nFinal Scores:");
  console.log(`Player Score: ${humanScore}`);
  console.log(`Computer Score: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("Congrats! You Won the game!")
  } else if (computerScore > humanScore) {
    console.log("Computer Wins the game!")
  } else {
    console.log("The game is a tie!");
  }
}

playGame();