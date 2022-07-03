const aiChoiceDisplay = document.getElementById('ai-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let aiChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    
    if (randomNumber === 1) {
        aiChoice = 'rock';
    }
    if (randomNumber === 2) {
        aiChoice = 'scissors';
    }
    if (randomNumber === 3) {
        aiChoice = 'paper';
    }
    aiChoiceDisplay.innerHTML = aiChoice;
}

function getResult() {
    if (aiChoice === userChoice) {
        result = 'it\'s a draw!';
    }
    if (aiChoice === 'rock' && userChoice === 'paper') {
        result = 'you win!';
    }
    if (aiChoice === 'rock' && userChoice === 'scissors') {
        result = 'you lose!';
    }
    if (aiChoice === 'paper' && userChoice === 'scissors') {
        result = 'you win!';
    }
    if (aiChoice === 'paper' && userChoice === 'rock') {
        result = 'you lose!';
    }
    if (aiChoice === 'scissors' && userChoice === 'rock') {
        result = 'you win!';
    }
    if (aiChoice === 'scissors' && userChoice === 'paper') {
        result = 'you lose!';
    }
    resultDisplay.innerHTML = result;
}

