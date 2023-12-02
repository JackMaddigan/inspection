var timerOn = false;
var stopwatchInterval;
var startTime;
var seconds;
var isPlaying = false;
const inspectionAudio = new Audio("audio/inspection-audio.mp3");

function updateStopwatch() {
  seconds = Math.floor((Date.now() - startTime) / 1000);
  document.getElementById("timerText").innerHTML = seconds;
  if (seconds >= 15) {
    timerOn = false;
    isPlaying = false;
    clearInterval(stopwatchInterval);
    document.body.style.backgroundColor = "#470b04";
  } else if (seconds >= 12) {
    document.body.style.backgroundColor = "#cb2004";
  } else if (seconds >= 8) {
    document.body.style.backgroundColor = "#fca204";
  }
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
    startTime = Date.now();
    timerOn = true;
  }
}

document.addEventListener("keydown", function (event) {
  if (!isPlaying) {
    inspectionAudio.currentTime = 0;
    inspectionAudio.play();
    isPlaying = true;
  } else {
    inspectionAudio.pause();
    isPlaying = false;
  }
  if (event.key === " ") {
    // The space key was pressed
    manageTimer();
  }
});

document.addEventListener("touchstart", function (event) {
  manageTimer();
  if (!isPlaying) {
    inspectionAudio.currentTime = 0;
    inspectionAudio.play();
    isPlaying = true;
  } else {
    inspectionAudio.pause();
    isPlaying = false;
  }
});
