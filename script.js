
// accessing all id's
const rock = document.getElementById('Rock')
const paper = document.getElementById('Paper')
const scissors = document.getElementById('Scissors')
const player = document.getElementById('player-select')
const computer = document.getElementById('computer-select')
const button = document.querySelectorAll('.btns')
const statusd = document.getElementById('status')
const yourScore = document.getElementById('span')
const newGame = document.getElementById('new')


const rock_img = "Rock.png"
const paper_img = "Paper.png"
const scissors_img = "Scissors.png"

let trackScore = {'computerScore':0, 'playerScore':0}

rps = ['Rock', 'Paper', 'Scissor']


rock.onclick = () => {
  player.src = rock_img
  let playerChoice = 'Rock'
  calling(playerChoice)
}

paper.onclick = () => {
  player.src = paper_img
  let playerChoice = 'Paper'
  calling(playerChoice)
}

scissors.onclick = () => {
  player.src = scissors_img
  let playerChoice = 'Scissors'
  calling(playerChoice)
}


const getComputerChoice = (rps) => {
  const random = Math.floor( Math.random() * rps.length);
  let computerChoice1 = rps[random];
  return computerChoice1;
}


const auto = (computerChoice) => {
  if ( computerChoice == 'Rock') {
    computer.src = rock_img
  } else if ( computerChoice == 'Paper') {
    computer.src = paper_img
  } else {
    computer.src = scissors_img
  }

}

const calling = (playerChoice) => {
 const computerChoice = getComputerChoice(rps)
 console.log({computerChoice})
 auto(computerChoice)
 let score =  makeScore(playerChoice,computerChoice ) 
 updates(score)
 trackScore['playerScore'] += score
 yourScore.innerText = trackScore['playerScore']

}


const makeScore = (playerChoice, computerChoice ) => {
  let score;

  // All situations where human draws, set `score` to 0
  if (playerChoice === computerChoice) {
    score = 0
  
  } else if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
    score = 1

  } else if (playerChoice === "Paper" && computerChoice === "Rock") {
    score = 1

  } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
    score = 1

  // Otherwise human loses (aka set score to -1)
  } else {
    score = -1
  }
  return score
}

const updates = (score) => {
  if(score == 1) {
    statusd.style.color = "lightgreen"
    statusd.innerText = "You win..."
  } else if ( score == 0) {
    statusd.style.color = "yellow"
    statusd.innerText = "Draw..."

  } else {
    statusd.style.color = "red"
    statusd.innerText = "Computer Win.."
  }
}


newGame.onclick = () => {
  player.src = scissors_img
  computer.src = scissors_img
  statusd.innerText = "Start.."
  trackScore['playerScore'] = 0
  statusd.style.color = "white"
  yourScore.innerText = trackScore['playerScore']
}