
// write out the steps you need to take before writing your code
/*
    1. when you click a button, the computer randomly selects a move
    2. compare the moves to get the results
    3. update a score
    4. display the result and score in an alert popup
*/


// when something doesn't exist in local storage, if you try to call it, it will return a value of null
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElement();

// null vs underfined
/*
    null = intentionally want something to be empty
    underfined = something has gone wrong
*/

// a good function name starts with a verb/action
function playGame(playerMove) {

    const computerMove = pickComputerMove();
    let result = '';

    if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'It\'s a tie!'
        } else if (computerMove === 'paper') {
            result = 'You lose.'
        } else {
            result = 'You win!'
        }

    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You win!'
        } else if (computerMove === 'paper') {
            result = 'It\'s a tie!'
        } else {
            result = 'You lose.'
        }
        
    } else {
        if (computerMove === 'rock') {
            result = 'You lose.'
        } else if (computerMove === 'paper') {
            result = 'You win!'
        } else {
            result = 'It\'s a tie!'
        }
    }

    if (result === 'You win!') {
        score.wins += 1;
    } else if (result === 'You lose.') {
        score.losses += 1;
    } else {
        score.ties += 1;
    }
    
    

    // local storage only supports strings
    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result')
        .innerHTML = `${result}`

    document.querySelector('.js-moves')
        .innerHTML = `
        You
        <img src="images/${playerMove}-emoji.png" class="move-icon">
        <img src="images/${computerMove}-emoji.png" class="move-icon">
        Computer
        `
}

function updateScoreElement() {
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
}

function pickComputerMove() {

    const randomNumber = Math.floor(Math.random() * 3);
    let computerMove = '';

    if (randomNumber == 0) {
        computerMove = 'rock'
    } else if (randomNumber == 1) {
        computerMove = 'paper'
    } else {
        computerMove = 'scissors'
    }

    // return statements return a value from a function
    // if there is nothing after return, it will return underfined and ends the function
    return computerMove;
}

