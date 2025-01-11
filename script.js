let startTime = 0;
let elapsedTime = 0;
let interval = null;
let isRunning = false;

const timeDisplay = document.getElementById("time");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");

function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function updateDisplay() {
  const now = Date.now();
  elapsedTime = now - startTime;
  timeDisplay.textContent = formatTime(elapsedTime);
}

startButton.addEventListener("click", () => {
  if (!isRunning) {
    isRunning = true;
    startTime = Date.now() - elapsedTime;
    interval = setInterval(updateDisplay, 1000);
  }
});

pauseButton.addEventListener("click", () => {
  if (isRunning) {
    isRunning = false;
    clearInterval(interval);
    elapsedTime = Date.now() - startTime;
  }
});

resetButton.addEventListener("click", () => {
  isRunning = false;
  clearInterval(interval);
  elapsedTime = 0;
  timeDisplay.textContent = "00:00:00";
});
