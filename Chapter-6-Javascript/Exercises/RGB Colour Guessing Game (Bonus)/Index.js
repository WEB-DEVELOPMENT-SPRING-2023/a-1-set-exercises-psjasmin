// Color Randomizer
function random255() {
  return Math.floor(Math.random() * 256);
}

// RGB Value Randomizer
function randomColor() { 
  return `rgb(${random255()}, ${random255()}, ${random255()})`
}

let stage;
let problem;
let correctAnswer;

// Transitions to the next stage
function nextStage() {
  stage++;
  problem = [randomColor(), randomColor(), randomColor()];
  correctAnswer = Math.floor(Math.random() * 3);
}

function draw() {
  document.querySelectorAll('.box').forEach((el, index) => {
    el.style.backgroundColor = problem[index];
  })
  document.querySelector('.rgb-text').textContent = problem[correctAnswer];
  document.querySelector('.score').textContent = 'SCORE: ' + stage; // Adding up the score
}

// Resetting the Game
function init() {
  stage = 0;
  problem = [randomColor(), randomColor(), randomColor()];
  correctAnswer = Math.floor(Math.random() * 3);
}

document.querySelectorAll('.box').forEach((el, index) => {
  el.addEventListener('click', e => {
    if (index === correctAnswer) {
      document.querySelector('.correct').classList.add('show'); // CORRECT ANSWER SCREEN
    } else {
      document.querySelector('.wrong').classList.add('show'); // WRONG ANSWER SCREEN
      document.querySelector('.modal-score').textContent = 'SCORE: ' + stage;
    }
    el.classList.add('show');
  });
})

// Correct screen modal button (next stage)
document.querySelector('.correct .modal-button').addEventListener('click', e => {
  nextStage();
  draw();
  document.querySelector('.correct').classList.remove('show');
  document.querySelectorAll('.box').forEach(el => {
    el.classList.remove('show');
  })
})

// Wrong screen modal button (play again)
document.querySelector('.wrong .modal-button').addEventListener('click', e => {
  init();
  draw();
  document.querySelector('.wrong').classList.remove('show');
  document.querySelectorAll('.box').forEach(el => {
    el.classList.remove('show');
  })
})

init();
draw();