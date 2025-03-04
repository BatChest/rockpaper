
function getComputerChoice(min, max) {
  // return rock paper scissors randomly using math function
  // let rock = 1;
  // let paper = 2;
  // let scissor = 3;
  return Math.floor(Math.random() * (max - min) + min);
}

console.log(getComputerChoice(1, 4));