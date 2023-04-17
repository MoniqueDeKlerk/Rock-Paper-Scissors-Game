'use strict';

//Caching the DOM
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result');
const rock_btn = document.getElementById('Rock');
const paper_btn = document.getElementById('Paper');
const scissors_btn = document.getElementById('Scissors');
const playerChoice_btns = document.querySelectorAll('.btn');
const choiceDisplay = document.getElementById('choices');
const userChoiceDisplay_span = document.getElementById('user-choice');
const computerChoiceDisplay_span = document.getElementById('computer-choice');
const restartBtn = document.getElementById('restart');
let userChoice;
let computerChoice;

//User choice
playerChoice_btns.forEach((buttons) => {
  buttons.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay_span.innerHTML = userChoice;
    getComputerSelection();
    game();
    rounds();
  });
});

//Compuer Choice
function getComputerSelection() {
  const choice = [`Rock`, `Paper`, `Scissor`];
  const x = Math.floor(Math.random() * choice.length);
  computerChoice = choice[x];
  computerChoiceDisplay_span.innerHTML = computerChoice;
}

//Functions that keep score
function userWins() {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = `${userChoice} beats ${computerChoice} 🥷🏽 Wins`;
  document.getElementById(userChoice).classList.add('green-glow');
  setTimeout(function () {
    document.getElementById(userChoice).classList.remove('green-glow');
  }, 500);
}

function userLooses() {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = `${computerChoice} beats ${userChoice} 🖥️ Wins`;
  document.getElementById(userChoice).classList.add('red-glow');
  setTimeout(function () {
    document.getElementById(userChoice).classList.remove('red-glow');
  }, 500);
}

function draw() {
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = `${userChoice} : ${computerChoice} 🟰 Draw `;
  document.getElementById(userChoice).classList.add('grey-glow');
  setTimeout(function () {
    document.getElementById(userChoice).classList.remove('grey-glow');
  }, 500);
}

//Users Choice Function
function game() {
  if (
    (userChoice == `Rock` && computerChoice == `Scissor`) ||
    (userChoice == `Paper` && computerChoice == `Rock`) ||
    (userChoice == `Scissor` && computerChoice == `Paper`)
  ) {
    userWins(userChoice, computerChoice);
  } else if (
    (userChoice == `Rock` && computerChoice == `Rock`) ||
    (userChoice == `Paper` && computerChoice == `Paper`) ||
    (userChoice == `Scissor` && computerChoice == `Scissor`)
  ) {
    draw(userChoice, computerChoice);
  } else {
    userLooses(userChoice, computerChoice);
  }
}

//Rounds
function rounds() {
  if (userScore === 5) {
    result_div.innerHTML = `Game over!  🥷🏽 Wins`;
    rock_btn.classList.add('hidden');
    paper_btn.classList.add('hidden');
    scissors_btn.classList.add('hidden');
    choiceDisplay.classList.add('hidden');
    restartBtn.classList.remove('hidden');
  } else if (computerScore === 5) {
    result_div.innerHTML = `Game over!  🖥️ Wins`;
    rock_btn.classList.add('hidden');
    paper_btn.classList.add('hidden');
    scissors_btn.classList.add('hidden');
    choiceDisplay.classList.add('hidden');
    restartBtn.classList.remove('hidden');
  }
}

//Restart Game
restartBtn.addEventListener('click', () => {
  userScore = 0;
  computerScore = 0;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  rock_btn.classList.remove('hidden');
  paper_btn.classList.remove('hidden');
  scissors_btn.classList.remove('hidden');
  choiceDisplay.classList.remove('hidden');
});
