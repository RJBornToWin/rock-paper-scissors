// paper > rock
// scissor > paper
// rock > scissor
const choices = ["rock", "paper", "scissors"];
const TIE = 0, PLAYER = 1, COMPUTER = 2;
let playerScore = 0, computerScore = 0;

function getComputerChoice() {
    const computerChoice = Math.floor(Math.random()*3) + 1;
    return choices[computerChoice-1];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        return TIE;
    }
    else if ((playerSelection.toLowerCase() == "paper" && computerSelection == "rock")
            || (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper")
            || (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors")) {
        return PLAYER;
    }
    
    return COMPUTER;
}

function game(playerSelection) {
    const computerSelection = getComputerChoice();
    
    
    const roundResult = document.querySelector("#round-result");
    let roundWinner = playRound(playerSelection.toLowerCase(), computerSelection);
    if (roundWinner == PLAYER) {
        updatePlayerScore(++playerScore);
        roundResult.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else if (roundWinner == COMPUTER) {
        updateComputerScore(++computerScore);
        roundResult.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else {
        roundResult.textContent = `It's a tie! ${playerSelection} vs ${computerSelection}`;
    }

    if (playerScore == 5 || computerScore == 5) {
        decideWinner(playerScore, computerScore);
        updatePlayerScore(playerScore = 0);
        updateComputerScore(computerScore = 0);
    }
}

function updatePlayerScore(playerScore) {
    const plrScore = document.querySelector("#pscore");
    plrScore.textContent = playerScore;
}

function updateComputerScore(computerScore) {
    const compScore = document.querySelector("#cscore");
    compScore.textContent = computerScore;
}

function decideWinner(playerScore, computerScore){
    const gameResult = document.querySelector("#round-result");
    if (playerScore > computerScore) {
        gameResult.textContent = "Game over! You win!";
    }
    else if (computerScore > playerScore) {
        gameResult.textContent = "Game over! You Lose!";
    }
    else {
        gameResult.textContent = "Game over! It's a tie!";
    } 
}