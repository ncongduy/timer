const runButton = document.getElementById("runButton");
const resetButton = document.getElementById("resetButton");
const timerText = document.getElementById("timerText");
const audio = new Audio("./audio/nothing mix adc _01.mp3");
let isOngoing = false;

const timerFunc = () => {
  if (isOngoing) return;
  const inputMinutes = document.getElementById("typeMinutes").value;
  const startTimer = new Date().getTime();  
  const endTimer = startTimer + inputMinutes*60*1000;

  //Check timer
  const checkTimer = (time) => {
    if (time <= 0) {
      isOngoing = false;
      clearInterval(runInterval);
      audio.play();
      timerText.innerHTML = `0:0`;
    }
  };

  //Run timer
  const runInterval = setInterval(() => {
    isOngoing = true;
    let currentTimer = new Date().getTime();
    let countTimer = endTimer - currentTimer;
    let minutes = Math.floor(countTimer / 60000) % 60;
    let seconds = Math.floor(countTimer / 1000) % 60;

    //render minutes and seconds in browser
    timerText.innerHTML = `${minutes}:${seconds}`;  

    //if on time, play music
    checkTimer(countTimer);      
  }, 1000);
};

runButton.addEventListener("click", timerFunc);
resetButton.addEventListener("click", () => {
  window.location.reload();
});
