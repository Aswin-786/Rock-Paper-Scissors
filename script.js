// Accessing all elements by their IDs
const rock = document.getElementById('Rock');
const paper = document.getElementById('Paper');
const scissors = document.getElementById('Scissors');
const player = document.getElementById('player-select');
const computer = document.getElementById('computer-select');
const button = document.querySelectorAll('.btns');
const statusd = document.getElementById('status');
const yourScore = document.getElementById('span');
const newGame = document.getElementById('new');

// Images for rock, paper, and scissors
const rock_img = "Rock.png";
const paper_img = "Paper.png";
const scissors_img = "Scissors.png";

// Object to track scores
let trackScore = { 'computerScore': 0, 'playerScore': 0 };

// Array of rock, paper, and scissors
const rps = ['Rock', 'Paper', 'Scissor'];

// Event listeners for button clicks
rock.onclick = () => {
  player.src = rock_img;
  let playerChoice = 'Rock';
  calling(playerChoice);
}

paper.onclick = () => {
  player.src = paper_img;
  let playerChoice = 'Paper';
  calling(playerChoice);
}

scissors.onclick = () => {
  player.src = scissors_img;
  let playerChoice = 'Scissors';
  calling(playerChoice);
}

// Randomly selects computer choice
const getComputerChoice = (rps) => {
  const random = Math.floor(Math.random() * rps.length);
  let computerChoice1 = rps[random];
  return computerChoice1;
}

// Updates computer choice to the DOM
const auto = (computerChoice) => {
  if (computerChoice === 'Rock') {
    computer.src = rock_img;
  } else if (computerChoice === 'Paper') {
    computer.src = paper_img;
  } else {
    computer.src = scissors_img;
  }
}

// Calls score & auto functions
const calling = (playerChoice) => {
  const computerChoice = getComputerChoice(rps);
  auto(computerChoice);
  let score = makeScore(playerChoice, computerChoice);
  updates(score);
  trackScore['playerScore'] += score;
  yourScore.innerText = trackScore['playerScore'];
}

// Calculates player score
const makeScore = (playerChoice, computerChoice) => {
  let score;

  // All situations where human draws, set `score` to 0
  if (playerChoice === computerChoice) {
    score = 0;
  } else if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
    score = 1;
  } else if (playerChoice === "Paper" && computerChoice === "Rock") {
    score = 1;
  } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
    score = 1;
  } else {
    // Otherwise human loses (aka set score to -1)
    score = -1;
  }
  return score;
}

// Updates the status message based on the score
const updates = (score) => {
  if (score === 1) {
    statusd.style.color = "lightgreen";
    statusd.innerText = "You win...";
  } else if (score === 0) {
    statusd.style.color = "yellow";
    statusd.innerText = "Draw...";
  } else {
    statusd.style.color = "red";
    statusd.innerText = "Computer Win..";
  }
}

// Event listener for "New Game" button click
newGame.onclick = () => {
  player.src = scissors_img;
  computer.src = scissors_img;
  statusd.innerText = "Start..";
  trackScore['playerScore'] = 0;
  statusd.style.color = "white";
  yourScore.innerText = trackScore['playerScore'];
}
