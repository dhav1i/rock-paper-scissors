let humanScore = 0;
let computerScore = 0;

function getCopmuterChoice() {
let randomChoice = Math.floor(Math.random() * 3)
    if(randomChoice == 0) {
        return "rock"
    } else if(randomChoice == 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
let userChoice = prompt("What's your choice?").toLowerCase()
        return userChoice
}

function playRound(humanChoice, computerChoice) {
    if(computerChoice === humanChoice) {
        console.log(`It's a tie! ${humanChoice} ties with ${computerChoice}`)
    } else if (computerChoice == 'rock' && humanChoice == 'scissors' || computerChoice == 'scissors' && humanChoice == 'paper' || computerChoice == 'paper' && humanChoice == 'rock') {
        computerScore++
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}`)
    } else if (humanChoice == 'rock' && computerChoice == 'scissors' || humanChoice == 'scissors' && computerChoice == 'paper' || humanChoice == 'paper' && computerChoice == 'rock'){
        humanScore++
        console.log(`Congrats you won! ${humanChoice} beats ${computerChoice}`)
    }
     else {
        console.log("Please enter a valid option 'Rock', 'Paper', or 'Scissors' ")
     }
    console.log(`Your score is: ${humanScore}, Computer score is: ${computerScore}`)
}

function playGame() {
    for(i = 0; i < 5; i++) {
      playRound(getHumanChoice(), getCopmuterChoice())
    }
    if(computerScore > humanScore) {
        console.log('Computer won! good luck next time')
    } else if(computerScore < humanScore){
        console.log('Congrats! you domainated the computer!')
    } else {
        console.log('No winners!')
    }
}

playGame()



