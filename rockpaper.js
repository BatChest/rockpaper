let humanScore = 0;
let computerScore = 0;

let resultsDiv;
let gameEndDiv;


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

  const roundResults = document.createElement('p');

  // First, check for a tie
  if (convertedHC === computerChoice) {
    roundResults.textContent = "Its a Tie!";
    resultsDiv.appendChild(roundResults);
    return 0;
  }

  // Then check all winning scenarios
  // Rock beats Scissors
  if ((convertedHC === 1 && computerChoice === 3) ||
    (convertedHC === 3 && computerChoice === 1)) {
    if (convertedHC === 1) {
      roundResults.textContent = "You Win! Rock beats Scissors";
      resultsDiv.appendChild(roundResults);
      return 2;
    } else {
      roundResults.textContent = "You Lose! Rock beats Scissors"
      resultsDiv.appendChild(roundResults);
      return 1;
    }
  }

  // Paper beats Rock
  if ((convertedHC === 1 && computerChoice === 2) ||
    (convertedHC === 2 && computerChoice === 1)) {
    if (convertedHC === 2) {
      roundResults.textContent = "You Win! Paper beats Rock";
      resultsDiv.appendChild(roundResults);
      return 2;
    } else {
      roundResults.textContent = "You Lose! Paper beats Rock";
      resultsDiv.appendChild(roundResults);
      return 1;
    }
  }

  // Scissors beats Paper
  if ((convertedHC === 2 && computerChoice === 3) ||
    (convertedHC === 3 && computerChoice === 2)) {
    if (convertedHC === 3) {
      roundResults.textContent = "You Win! Scissors beats Paper"
      resultsDiv.appendChild(roundResults);
      return 2;
    } else {
      roundResults.textContent = "You Lose! Scissors beats Paper";
      resultsDiv.append(roundResults);
      return 1;
    }
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  // Get a reference to the container where you want to add the buttons
  const container = document.body;
  resultsDiv = document.createElement('div');

  resultsDiv.id = 'results';
  const scoreDiv = document.createElement('div');
  scoreDiv.id = 'score';
  scoreDiv.textContent = 'Player: 0 | Computer: 0';

  gameEndDiv = document.createElement('div');
  gameEndDiv.id = 'game-end';
  gameEndDiv.style.fontWeight = 'bold';
  gameEndDiv.style.fontSize = '24px';
  gameEndDiv.style.marginTop = '20px';

  const rockButton = document.createElement('button');
  rockButton.textContent = "Rock";

  const paperButton = document.createElement('button');
  paperButton.textContent = "Paper";

  const scissorsButton = document.createElement('button');
  scissorsButton.textContent = "Scissors";

  rockButton.addEventListener('click', function () {
    const computerSelection = getComputerChoice(1, 4);
    const outcome = playRound('rock', computerSelection);
    updateScore(outcome, computerSelection);
  });

  paperButton.addEventListener('click', function () {
    const computerSelection = getComputerChoice(1, 4);
    const outcome = playRound('paper', computerSelection);
    updateScore(outcome, computerSelection);
  });

  scissorsButton.addEventListener('click', function () {
    const computerSelection = getComputerChoice(1, 4);
    const outcome = playRound('scissors', computerSelection);
    updateScore(outcome, computerSelection);
  });



  container.append(rockButton);
  container.append(paperButton);
  container.append(scissorsButton);

  container.appendChild(resultsDiv);
  container.appendChild(scoreDiv);
  container.appendChild(gameEndDiv);

  //let outcome = playRound(playerSelection, computerSelection);
  function updateScore(outcome, computerChoice) {
    if (outcome === 2) {
      humanScore += 1;
    } else if (outcome === 1) {
      computerScore += 1;
    }

    const computerChoiceElem = document.createElement('p');
    let choiceText;
    if (computerChoice === 1) choiceText = "rock";
    else if (computerChoice === 2) choiceText = "paper";
    else choiceText = "scissors";

    scoreDiv.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
    resultsDiv.appendChild(computerChoiceElem);
    if (humanScore === 5 || computerScore === 5) {
      endGame(humanScore, computerScore);
    }
  }

  function endGame(humanScore, computerScore) {
    if (humanScore === 5) {
      gameEndDiv.textContent = "You WIN!";
    } else if (computerScore === 5) {
      gameEndDiv.textContent = "The Computer Wins";
    }
  }
}

playGame();