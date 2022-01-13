const runButton = document.getElementById('runButton');
const resetButton = document.getElementById('resetButton');
const timerText = document.getElementById('timerText');
const audio = new Audio('./audio/nothing mix adc _01.mp3');
let isOngoing = false;

const timerFunc = () => {
	if (isOngoing) return;
	const inputMinutes = document.getElementById('typeMinutes').value;
	const startTimer = new Date().getTime();
	const endTimer = startTimer + inputMinutes * 60 * 1000;

	//Check timer
	const checkTimer = (time) => {
		if (time <= 0) {
			isOngoing = false;
			clearInterval(runInterval);
			audio.play();
			timerText.innerHTML = `00:00:00`;
		}
	};

	//Run timer
	const runInterval = setInterval(() => {
		isOngoing = true;
		let currentTimer = new Date().getTime();
		let countTimer = endTimer - currentTimer;
		let hours = `0${Math.floor(countTimer / 1000 / 60 / 60) % 24}`.slice(
			-2
		);
		let minutes = `0${Math.floor(countTimer / 1000 / 60) % 60}`.slice(-2);
		let seconds = `0${Math.floor(countTimer / 1000) % 60}`.slice(-2);

		//render minutes and seconds in browser
		timerText.innerHTML = `${hours}:${minutes}:${seconds}`;

		//if on time, play music
		checkTimer(countTimer);
	}, 1000);
};

runButton.addEventListener('click', timerFunc);

resetButton.addEventListener('click', () => {
	window.location.reload();
});
