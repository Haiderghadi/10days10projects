//variables
const start = document.querySelector(".startstop-btn");
const resetBtn = document.querySelector(".reset-btn");

let seconds = 0;
let minutes = 0;
let hours = 0;

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

let timerInteval = null;
let timerStatus = "stop";

//stop watch function
function stopwatch() {
  seconds++;

  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;
    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }
  if (seconds < 10) {
    leadingSeconds = "0" + seconds.toString();
  } else {
    leadingSeconds = seconds;
  }
  if (minutes < 10) {
    leadingMinutes = "0" + minutes.toString();
  } else {
    leadingMinutes = minutes;
  }
  if (hours < 10) {
    leadingHours = "0" + hours.toString();
  } else {
    leadingHours = hours;
  }

  let displayTimer = (document.querySelector(".timer").innerText =
    leadingHours + ":" + leadingMinutes + "." + leadingSeconds);
}
// window.setInterval(stopwatch, 1);
start.addEventListener("click", () => {
  if (timerStatus === "stopped") {
    timerInteval = window.setInterval(stopwatch, 1000);
    document.querySelector(
      ".startstop-btn"
    ).innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
    timerStatus = "started";
  } else {
    window.clearInterval(timerInteval);
    document.querySelector(
      ".startstop-btn"
    ).innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
    timerStatus = "stopped";
  }
});

resetBtn.addEventListener("click", () => {
  window.clearInterval(timerInteval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.querySelector(".timer").innerHTML = "00:00.00";
  document.querySelector(
    ".startstop-btn"
  ).innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
  timerStatus = "stopped";
});
