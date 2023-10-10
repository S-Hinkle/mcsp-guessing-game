function getGuess(min, max) {
    let guess;
    do {
        guess = parseInt(prompt(`Guess a whole number between ${min} and ${max}`));
    } while (isNaN(guess) || guess < min || guess > max);
    return guess;
}

function getName() {
    return prompt("Enter your name");
}

function playGame() {
    const minNumber = 1;
    const maxNumber = 100;
    const targetNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1))// + minNumber;
    //const targetNumber = 50;
    //console.log(targetNumber)
    let attempts = 0;
    const guessedNumbers = [];

    while (true) {
        const userGuess = getGuess(minNumber, maxNumber);
        attempts++;
        guessedNumbers.push(userGuess);

        if (userGuess === targetNumber) {
            return { attempts, guessedNumbers };
        } else if (userGuess > targetNumber) {
            alert("Guess Lower");
        } else {
            alert("Guess Higher");
        }
    }
}

function playAgain() {
    const playerDatabase = {};

    while (true) {
        const userName = getName();
        const previousScore = playerDatabase[userName] || null;
        const gameResult = playGame();

        playerDatabase[userName] = gameResult.attempts;

        if (previousScore === null) {
            alert(`That's Correct, ${userName}! It only took you ${gameResult.attempts} guesses! \nYour guesses were ${gameResult.guessedNumbers}`);
        } else if (previousScore > gameResult.attempts) {
            alert(`That's Correct, ${userName}! You beat your previous attempt by ${previousScore - gameResult.attempts} guesses! \nYour guesses were ${gameResult.guessedNumbers}`);
        } else if (previousScore < gameResult.attempts) {
            alert(`That's Correct, ${userName}! You did better in your last game by ${gameResult.attempts - previousScore} guesses! \nYour guesses were ${gameResult.guessedNumbers}stef`);
        }

        console.log(playerDatabase);

        const keepPlaying = prompt("Do you want to keep playing? (Enter 'yes' or 'no', lowercase)");

        if (keepPlaying.toLowerCase() !== 'yes') {
            break;
        }
    }
}

playAgain();



/*
EXAMPLE CODE 
Provided in class for study


const scores = {}; 

play(); 

function play() {
    const secretNumber = Math.ceil(Math.random() * 100);
    const guest = prompt("Please enter your name");
    let guess = prompt("Please enter a guess");

    initializeGuest(guest);

    while (parseInt(guess) !== secretNumber) {
        giveHintAndAskAgain(guest, guess, secretNumber);
        guess = prompt("Please enter a guess");
        scores[guest].current.push(guess);
    }

    displayResultMessage(guest);
    resetScores(guest);
    playAgain();
}

function initializeGuest(guest) {
    if (!scores[guest]) {
        scores[guest] = {
            current: [],
            past: []
        };
    }
}

function giveHintAndAskAgain(guest, guess, secretNumber) {
    const hint = parseInt(guess) < secretNumber ? 'HIGHER' : 'LOWER';
    alert(`Sorry ${guest}, Guess ${hint}!`);
}

function displayResultMessage(guest) {
    if (scores[guest].past.length > 0) {
        compareWithPreviousGame(guest);
    } else {
        alert(`That's Correct ${guest}! This is your first time playing. Your score is ${scores[guest].current.length} guesses: ${scores[guest].current.join(', ')}.`);
    }
}

function compareWithPreviousGame(guest) {
    const previousGuessCount = scores[guest].past.length;
    const currentGuessCount = scores[guest].current.length;
    const difference = currentGuessCount - previousGuessCount;

    if (difference < 0) {
        alert(`That's Correct ${guest}! You beat your previous attempt by ${Math.abs(difference)} guesses.`);
    } else if (difference > 0) {
        alert(`That's Correct ${guest}! You did better in your last game by ${difference} guesses.`);
    } else {
        alert(`That's Correct ${guest}! You had the same number of guesses in your last game. This round you had these guesses: ${scores[guest].current.join(', ')}.`);
    }
}

function resetScores(guest) {
    scores[guest].past = [...scores[guest].current];
    scores[guest].current = [];
}

function playAgain() {
    const response = prompt('Do you want to play again? Yes / No');

    switch (response) {
        case "Yes":
            alert('Ok started a new game!');
            play();
            break;
        case "No":
            alert('Cool, I\'m sure you have better things to do');
            break;
        default:
            alert('Sorry I didn\'t recognize that command');
            playAgain();
    }
} 
 
*/