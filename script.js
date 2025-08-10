const humanScoreText = document.getElementById('humanScoreText')
const computerScoreText = document.getElementById('computerScoreText')
const humanChoiceText = document.getElementById('humanChoiceText')
const computerChoiceText = document.getElementById('computerChoiceText')
const matchResultText = document.getElementById('matchResultText')
const roundResultText = document.getElementById('roundResultText')
const humanChoiceBtns = document.querySelectorAll('.humanChoiceBtn')

let humanScore = 0;
let computerScore = 0;


function getCopmuterChoice() {
 let randomChoice = Math.floor(Math.random() * 3);
    if(randomChoice == 0) {
        return "rock";
    } else if(randomChoice == 1) {
        return "paper";
    } else {
        return "scissors";
    };
}

let computerSelection = getCopmuterChoice();

function playRound(humanChoice, computerChoice) {
 let roundResult;
    if(computerChoice === humanChoice) {
        roundResult = `It's a tie! ${humanChoice[0].toUpperCase() + humanChoice.substring(1)} ties with ${computerChoice[0].toUpperCase() + computerChoice.substring(1)}` 
        roundResultText.textContent = roundResult
    } else if (computerChoice == 'rock' && humanChoice == 'scissors' || 
            computerChoice == 'scissors' && humanChoice == 'paper' || 
            computerChoice == 'paper' && humanChoice == 'rock') {
        computerScore++;
        roundResult = `You lose! ${computerChoice[0].toUpperCase() + computerChoice.substring(1)} beats ${humanChoice[0].toUpperCase() + humanChoice.substring(1)}`
        roundResultText.textContent = roundResult;
    } else if (humanChoice == 'rock' && computerChoice == 'scissors' ||
            humanChoice == 'scissors' && computerChoice == 'paper' ||
            humanChoice == 'paper' && computerChoice == 'rock'){
        humanScore++;
        roundResult = `You won! ${humanChoice[0].toUpperCase() + humanChoice.substring(1)} beats ${computerChoice[0].toUpperCase() + computerChoice.substring(1)}`;
        roundResultText.textContent = roundResult;
    };
   
    let matchResult;
    if(computerScore == 5 && computerScore > humanScore) {
    matchResult = 'Computer won! good luck next time.';
    matchResultText.textContent = matchResult;
    } else if(humanScore == 5 && computerScore < humanScore){
        matchResult = 'Congrats! you domainated the computer.';
        matchResultText.textContent = matchResult;
    }

    computerChoiceText.textContent = `Computer: ${computerChoice[0].toUpperCase() + computerChoice.substring(1)}`;
    humanChoiceText.textContent = `Human: ${humanChoice[0].toUpperCase() + humanChoice.substring(1)}`;
    humanScoreText.textContent = `Human score: ${humanScore}`
    computerScoreText.textContent = `Computer score: ${computerScore}`
    
}

humanChoiceBtns.forEach((btn) => {
    let playerSelecion;
    btn.addEventListener('click', () => {
    if(btn.id == "rock") {
    playerSelecion = "rock";
    } else if(btn.id == "paper") {
    playerSelecion = "paper" ;
    } else {
    playerSelecion = "scissors";
    }
    if(computerScore == 5 || humanScore == 5) {
        return;
    } else {
        playRound(playerSelecion, computerSelection);
    }
     return;
    })
})



