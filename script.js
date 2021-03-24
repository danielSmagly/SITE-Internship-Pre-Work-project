// global constants
//const clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

// Global Variables

var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 1.0; //must be between 0.0 and 1.0
var guessCounter = 0;
// clue will play 17.5 ms less for each play sequence
var clueHoldTime = 1000;

var numOfMistakes = 0;
//var remainingTime = 10;
var counter;
var timeLeft;

var remainingTime = 5;

var levelCounter;
var currentLevel;

function createPattern() {
  var i;
  var num;
  for (i = 0; i < 8; i++) {
    // set num equal to a random int from 1 to 6 inclusive
    num = Math.floor(Math.random() * 6) + 1;
    // create array of random ints
    pattern[i] = num;
  }
  return pattern;
}

function startGame() {
  // initialize game variables
  progress = 0;
  gamePlaying = true;
  numOfMistakes = 0;
  //timeLeft = 10;

  remainingTime = 5;
  currentLevel = 0;

  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  createPattern();
  gameTimer();

  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  clearInterval(counter);
  remainingTime = 0;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 232.2,
  2: 343.3,
  3: 454.4,
  4: 566.5,
  5: 677.7,
  6: 777.8
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
    clueHoldTime = clueHoldTime - 17.5;
  }
}

function loseGame() {
  clearInterval(counter);

  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  alert("Game Over. You won!");
}

function guess(btn) {
  //If user did not start game, break out
  if (!gamePlaying) {
    return;
  }
  if (pattern[guessCounter] == btn) {
    //clearInterval(counter);
    if (guessCounter == progress) {
      //If all guesses match, return winGame function
      if (progress == pattern.length - 1) {
        winGame();
      } else {
        //Increment progress if guess matches to pattern array
        progress = progress + 1;
        currentLevel = progress;
        levelCounter = document.getElementById("level");
        levelCounter.innerHTML = "Current Level: " + (currentLevel + 1);

        //Play another clue
        //
        playClueSequence();
      }
    } else {
      //Take next guess from user

      guessCounter = guessCounter + 1;
    }
  } else {
    //incorrect guess was made, return loseGame function
    numOfMistakes = numOfMistakes + 1;
    // player can guss incorrectly 2 times before loseGame() is called
    if (numOfMistakes >= 3) {
      loseGame();
    }
  }
}

function gameTimer() {
  counter = setInterval(function guess() {
    const time = document.getElementById("timer");

    remainingTime = remainingTime - 1;
    if (remainingTime == -1) {
      clearInterval(counter);
      loseGame();

      //remainingTime = 10;
    }

    time.innerHTML = "Minutes Remaining: " + remainingTime;
  }, 60000);
}
