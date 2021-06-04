const runButton = document.getElementById("runButton");
const resetButton = document.getElementById("resetButton");
const timerText = document.getElementById("timerText");
const audio = new Audio("./audio/nothing mix adc _01.mp3");
let isOngoing = false;

const timerFunc = () => {
  if (isOngoing) return;
  const inputMinutes = document.getElementById("typeMinutes").value;
  let remainingSeconds = inputMinutes * 60;

  //Check timer
  const checkTimer = (timeInSecond) => {
    if (timeInSecond < 0) {
      isOngoing = false;
      clearInterval(runInterval);
      audio.play();
    }
  };

  //Run timer
  const runInterval = setInterval(() => {
    isOngoing = true;
    let minutes = Math.floor(remainingSeconds / 60);
    let seconds = remainingSeconds % 60;

    //render minutes and seconds in browser
    timerText.innerHTML = `${minutes}:${seconds}`;
    //if on time, play music
    remainingSeconds--;
    checkTimer(remainingSeconds);
  }, 1000);
};

runButton.addEventListener("click", timerFunc);
resetButton.addEventListener("click", () => {
  window.location.reload();
});
