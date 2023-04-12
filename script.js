'use strict';

function getComputerChoice() {
  const choice = [`Rock`, `Paper`, `Scissor`];
  const x = Math.floor(Math.random() * choice.length);
  return choice[x];
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection == `Rock` && computerSelection == `Scissor`) ||
    (playerSelection == `Paper` && computerSelection == `Rock`) ||
    (playerSelection == `Scissor` && computerSelection == `Paper`)
  ) {
    return `I win, You lost!
    Player
    ${playerSelection}:
    Computer
    ${computerSelection}`;
  } else if (
    (playerSelection == `Rock` && computerSelection == `Rock`) ||
    (playerSelection == `Paper` && computerSelection == `Paper`) ||
    (playerSelection == `Scissor` && computerSelection == `Scissor`)
  ) {
    return `Its a draw!
    Player
    ${playerSelection}:
    Computer
    ${computerSelection}
  }`;
  } else {
    return `I loose! You win!
    Player
    ${playerSelection}:
    Computer
    ${computerSelection}`;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 1; i <= 5; i++) {
    const playerSelection = prompt(`Round${i}  Rock, Paper, Scissor`);
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));

    if (
      playRound(playerSelection, computerSelection) ==
      `I win, You lost!
    Player
    ${playerSelection}:
    Computer
    ${computerSelection}`
    ) {
      playerScore++;
    } else if (
      playRound(playerSelection, computerSelection) ==
      `I loose! You win!
    Player
    ${playerSelection}:
    Computer
    ${computerSelection}`
    ) {
      computerScore++;
    }
  }

  console.log(`Game Over`);

  if (playerScore > computerScore) {
    console.log(`Player is the winner!`);
  } else if (playerScore < computerScore) {
    console.log(`Computer is the Winner!`);
  } else {
    console.log(`The final score is a tie!`);
  }
  console.log(playerScore, computerScore);
}

console.log(game());
