var timerOn = false;
var stopwatchInterval;
var startTime;
var seconds;

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
  const audio = new Audio("audio/eight.mp3");
  // Play the audio
  audio.play();
}

function twelve() {
  const audio = new Audio("audio/twelve.mp3");
  // Play the audio
  audio.play();
}

function manageTimer() {
  document.body.style.backgroundColor = "green";
  if (timerOn) {
    // stop timer
    clearInterval(stopwatchInterval);
    timerOn = false;
  } else {
    // start timer
    stopwatchInterval = setInterval(updateStopwatch, 100);
    setTimeout(eight, 8000);
    setTimeout(twelve, 12000);
    startTime = Date.now();
    timerOn = true;
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === " ") {
    // The space key was pressed
    manageTimer();
  }
});

document.addEventListener("touchstart", function (event) {
  manageTimer();
});
