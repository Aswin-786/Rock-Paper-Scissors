
// // ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// // getComputerChoice() 👉 'Rock'
// // getComputerChoice() 👉 'Scissors'
// function getComputerChoice() {

//   let rpsChoices = ['Rock', 'Paper', 'Scissors']
//   let computerChoice = rpsChoices[Math.floor(Math.random() * 3)]
//   return computerChoice
  
// }

// // ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// // human wins - getResult('Rock', 'Scissors') 👉 1
// // human loses - getResult('Scissors', 'Rock') 👉 -1
// // human draws - getResult('Rock', 'Rock') 👉 0
// function getResult(playerChoice, computerChoice) {
//   // return the result of score based on if you won, drew, or lost
  
  

//   // All situations where human draws, set `score` to 0
  

//   // All situations where human wins, set `score` to 1
//   // make sure to use else ifs here
  

//   // Otherwise human loses (aka set score to -1)
  

//   // return score
//   let score;

//   // All situations where human draws, set `score` to 0
//   if (playerChoice === computerChoice) {
//     score = 0

  
//   } else if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
//     score = 1

//   } else if (playerChoice === "Paper" && computerChoice === "Rock") {
//     score = 1

//   } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
//     score = 1

//   // Otherwise human loses (aka set score to -1)
//   } else {
//     score = -1
//   }

//   // return score
//   return score

  
// }

// // ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
// function showResult(score, playerChoice, computerChoice) {
//   // Hint: on a score of -1
//   // You should do result.innerText = 'You Lose!'
//   // Don't forget to grab the div with the 'result' id!
// }

// // ** Calculate who won and show it on the screen **
// function onClickRPS(playerChoice) {
  
  
// }


// // ** Make the RPS buttons actively listen for a click and do something once a click is detected **
// function playGame() {
//   // use querySelector to select all RPS Buttons

//   // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
  
//   // 1. loop through the buttons using a forEach loop
//   // 2. Add a 'click' event listener to each button
//   // 3. Call the onClickRPS function every time someone clicks
//   // 4. Make sure to pass the currently selected rps button as an argument

 

//   // Add a click listener to the end game button that runs the endGame() function on click
//   let rpsButtons = document.querySelectorAll('.bts')

//   rpsButtons.forEach(rpsButton => {
//     rpsButton.onclick = () => onClickRPS(rpsButton)
//   })
  
// }

// // ** endGame function clears all the text on the DOM **
// function endGame() {
  
// }

// playGame()

const rock = document.getElementById('Rock')
const paper = document.getElementById('Paper')
const scissors = document.getElementById('Scissors')
const player = document.getElementById('player-select')
const computer = document.getElementById('computer-select')
const button = document.querySelectorAll('.btns')
const statusd = document.getElementById('status')

const rock_img = "Rock.png"
const paper_img = "Paper.png"
const scissors_img = "Scissors.png"

rps = ['Rock', 'Paper', 'Scissor']

rock.onclick = () => {
  player.src = rock_img
  let playerChoice = 'Rock'
  console.log({playerChoice})
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



function getComputerChoice1(rps) {
  const random = Math.floor(Math.random() * rps.length);
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
// updateResult(computer.src, player.src)
}

const calling = (playerChoice) => {
 const computerChoice = getComputerChoice1(rps)
 console.log({computerChoice})
 auto(computerChoice)
 let score =  makeScore(playerChoice,computerChoice ) 
 updates(score)
 

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

// const updateResult = (co)