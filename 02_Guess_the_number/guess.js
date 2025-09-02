const submit = document.querySelector('#submit-btn');
const userInput = document.querySelector('#guessField');
const prevGuessesOutput = document.querySelector('#previousGuesses');
let guessRemaining = document.querySelectorAll('.guessesRemaining');
const resultOutput = document.querySelector('#result');
const start = document.querySelector('#start-btn');

let randomNumber;
let prevGuesses = [];
let attemptsLeft = 10;
let playGame = false;


function startGame() {
    randomNumber = Math.round(Math.random() * 100 + 1);
    attemptsLeft = 10;
    prevGuesses = [];
    playGame = true;

    resultOutput.textContent = '';
    prevGuessesOutput.textContent = '';
    guessRemaining.forEach(el => el.textContent = attemptsLeft);

    userInput.disabled = false;
    submit.disabled = false;

    userInput.value = '';
    userInput.focus();

    console.log("Debug - Random number is: ", randomNumber); // For testing
}

function checkGuess(e){
    e.preventDefault();

    if(!playGame){
        resultOutput.textContent = "Click 'Start Game' to begin!";
        return;
    }

    const userGuess = Number(userInput.value);

    if(userGuess < 0 || userGuess > 100 || isNaN(userGuess)) {
        resultOutput.textContent = "Please enter a valid number between 0 and 100.";
        return;
    }

    prevGuesses.push(userGuess);
    attemptsLeft--;

    prevGuessesOutput.textContent = prevGuesses.join(', ');
    guessRemaining.forEach(el => el.textContent = attemptsLeft);

    if (userGuess === randomNumber) {
        resultOutput.textContent = `🎉 Congratulations! You guessed it right. The number was ${randomNumber}.`;
        endGame();
    } else if (attemptsLeft === 0) {
        resultOutput.textContent = `💥 Game Over! The correct number was ${randomNumber}.`;
        endGame();
    } else {
        if (userGuess < randomNumber) {
            resultOutput.textContent = "📉 Too low! Try a higher number.";
        } else {
            resultOutput.textContent = "📈 Too high! Try a lower number.";
        }
    }

    userInput.value = '';
    userInput.focus();
}


function endGame(){
    playGame = false;
    userInput.disabled = true;
    submit.disabled = true;
}

start.addEventListener('click', startGame);
submit.addEventListener('click', checkGuess);

