var timerOn = false;
var stopwatchInterval;
var startTime;
var seconds;
const eightSec = new Audio("audio/eight.mp3");
const twelveSec = new Audio("audio/twelve.mp3");

function updateStopwatch() {
  seconds = Math.floor((Date.now() - startTime) / 1000);
  document.getElementById("timerText").innerHTML = seconds;
  if (seconds >= 15) {
    timerOn = false;
    clearInterval(stopwatchInterval);
    document.body.style.backgroundColor = "#470b04";
  } else if (seconds >= 12) {
    document.body.style.backgroundColor = "#cb2004";
  } else if (seconds >= 8) {
    document.body.style.backgroundColor = "#fca204";
  }
}

function eight() {
  // Play the audio
  eightSec.volume = 1;
  eightSec.play();
  clearInterval(eightSecondsInt);
}

function twelve() {
  // Play the audio
  twelveSec.volume = 1;
  twelveSec.play();
  clearInterval(twelveSecondsInt);
}

function manageTimer() {
  document.body.style.backgroundColor = "green";
  if (timerOn) {
    // stop timer
    clearInterval(stopwatchInterval);
    clearInterval(eightSecondsInt);
    clearInterval(twelveSecondsInt);
    timerOn = false;
  } else {
    // start timer
    stopwatchInterval = setInterval(updateStopwatch, 100);
    eightSecondsInt = setInterval(eight, 8000);
    twelveSecondsInt = setInterval(twelve, 12000);
    startTime = Date.now();
    timerOn = true;
  }
}

document.addEventListener("keydown", function (event) {
  // eightSec.volume = 0;
  // eightSec.play();
  // twelveSec.volume = 0;
  // twelveSec.play();
  if (event.key === " ") {
    // The space key was pressed
    manageTimer();
  }
});

document.addEventListener("touchstart", function (event) {
  // eightSec.volume = 0;
  // eightSec.play();
  // twelveSec.volume = 0;
  // twelveSec.play();
  manageTimer();
});
