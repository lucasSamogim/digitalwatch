"use strict";

const menuContainer = document.querySelector('.watch__menu--container');
const clockArea = document.querySelector('.watch__clock-area');
const stopwatchArea = document.querySelector('.watch__stopwatch--area');
const clockBtn = document.querySelector('.clock-btn');
const stopwatchBtn = document.querySelector('.stopwatch-btn');
const stopwatchToMenu = document.querySelector('.stopwatch-to-menu');
const clockToMenuBtn = document.querySelector('.clock-to-menu');
const stopwatchClock = document.querySelector(".stopwatch--clock");
const startBtn = document.querySelector('.start-btn');
const pauseBtn = document.querySelector(".pause-btn");
const resetBtn = document.querySelector('.reset-btn');
//const clockToMenuBtn = document.querySelector('.clock-to-menu');


//ENTER THE CLOCK AREA WHEN CLICK ON CLOCK-BTN
clockBtn.addEventListener('click', () => {
    menuContainer.style.display = "none";
    clockArea.style.display = "flex";
})

//ENTER THE STOPWATCH AREA WHEN CLICK ON CLOCK-BTN
stopwatchBtn.addEventListener('click', () => {
    menuContainer.style.display = "none";
    stopwatchArea.style.display = "flex";
})

//REALTIME CLOCK AND MENU BUTTON IN CLOCK AREA
const currentTime = () => {
    const realtimeClock = document.querySelector(".realtime-clock");

    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    let time = `${hours}:${minutes}:${seconds}`;
    realtimeClock.innerText = time;
}

setInterval(currentTime, 1000);

clockToMenuBtn.addEventListener('click', () => {
    clockArea.style.display = "none";
    menuContainer.style.display = "flex";
});

//STOPWATCH CLOCK AND BUTTONS
let hr = 0;
let min = 0;
let sec = 0;
let ms = 0;
let stopTime = true;

startBtn.addEventListener("click", function startTimer() {
    if (stopTime == true) {
          stopTime = false;
          timerCycle();
      }
});

pauseBtn.addEventListener("click", function pauseTimer() {
    if (stopTime == false) {
      stopTime = true;
    }
});

function timerCycle() {
    if (stopTime == false) {
    ms = parseInt(ms);
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec += 1;

    if (sec == 60) {
      min += 1;
      sec = 0;
    }

    if (min == 60) {
      hr += 1;
      min = 0;
      sec = 0;
    }

    if (ms < 10 || ms == 0) {
        ms = '0' + ms;
      }

    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }

    if (min < 10 || min == 0) {
      min = '0' + min;
    }

    if (hr < 10 || hr == 0) {
      hr = '0' + hr;
    }

    stopwatchClock.innerHTML = `${hr}:${min}:${sec}`;

    setTimeout("timerCycle()", 1000);
  }
}

function resetTimer() {
    stopwatchClock.innerHTML = "00:00:00";
    stopTime = true;
    hr = 0;
    sec = 0;
    min = 0;
}

resetBtn.addEventListener("click", resetTimer);

stopwatchToMenu.addEventListener("click", () => {
    stopwatchArea.style.display = "none";
    menuContainer.style.display = "flex";
    resetTimer();
});