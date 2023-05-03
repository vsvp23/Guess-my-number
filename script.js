'use strict';

// console.log(document.querySelector('.message').textContent);

//  document.querySelector('.message').textContent = 'Correct number ! 🎉';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value
// document.querySelector('.guess').value = 23;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// KREIRANJE CHECK FUNCKIJE RADI DRY KODA I LAKSEG UBACIVANJA TASTERA ENTER ZA PROVERAVANJE REZULTATA.
const check = function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔ No number');
  } else if (guess === secretNumber) {
    displayMessage('🎉Correct number!');
    document.querySelector('.message').textContent = '🎉Correct number!!';
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;

      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high' : ' 📉 Too low ');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = ' 💥 You lost the game!';
      displayMessage(' 💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
};
// KRAJ CHECK FUNKCIJE

//Kreiranje funkcije za btn again omogucavanje tasterom Esc da ponovo pokirenemo proces igre:
const playAgain = function () {
  //Restore the score:
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //Restore the message:
  // document.querySelector('.message').textContent = ' Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#4d4c4c';

  document.querySelector('.number').style.width = '15rem';
};
//

//Enter kao taster koji prikazuje rezlutat igre.
document.querySelector('.check').addEventListener('click', check);

document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Enter') {
    check();
  }
});

document.querySelector('.again').addEventListener('click', playAgain);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    playAgain();
  }
});
