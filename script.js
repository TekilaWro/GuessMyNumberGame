'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);
let score = 10;
let highscore = 0;

document.querySelector('.check-btn').addEventListener('click', function () {
  const guess = document.querySelector('.input-guess').value;
  const gameMessage = document.querySelector('.game-msg');

  if (!guess) {
    gameMessage.textContent = 'Input a number';
  } else if (score > 1) {
    if (guess < secretNumber) {
      gameMessage.textContent = 'too low';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else if (guess > secretNumber) {
      gameMessage.textContent = 'too high';
      score = score - 1;
      document.querySelector('.score').textContent = score;
      // WIN
    } else if (guess == secretNumber) {
      gameMessage.textContent = 'good answear';
      document.querySelector('body').style.backgroundColor = '#228B22';
      document.querySelector('.number-secret').textContent = secretNumber;
      //highscore
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    }

    // LAST CHANCE
  } else if (score === 1) {
    // WIN
    if (guess == secretNumber) {
      gameMessage.textContent = 'good answear';
      document.querySelector('body').style.backgroundColor = '#228B22';
      document.querySelector('.number-secret').textContent = secretNumber;
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    }
    // LOST
  } else {
    gameMessage.textContent = 'You lost';
    document.querySelector('.score').textContent = 0;
    document.querySelector('body').style.backgroundColor = '#B22222';
    document.querySelector('.number-secret').textContent = 'X';
  }
});

// AGAIN RESTART
document.querySelector('.btn-again').addEventListener('click', function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  document.querySelector('.score').textContent = score;
  document.querySelector('.game-msg').textContent = 'start guessing...';
  document.querySelector('body').style.backgroundColor = '#222222';
  document.querySelector('.number-secret').textContent = '?';
});
