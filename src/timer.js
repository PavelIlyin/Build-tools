import { soundClick } from "./sound.js";
import { time } from './diffDates.js';

let startBtn = document.querySelector('.start__btn');
let stopBtn = document.querySelector('.stop__btn');
let form = document.querySelector('.timer');
let timerId;
function Start() {
    timerId = setInterval(function () {
        
        let hours = form.elements.hours.value;
        let minutes = form.elements.minutes.value;
        let seconds = form.elements.seconds.value;
        [form.elements.hours.value, form.elements.minutes.value, form.elements.seconds.value] = time(hours, minutes, seconds);
        if (hours == 0 && minutes == 0 && seconds == 1) {
            soundClick();
            clearInterval(timerId);    
        }
    }, 1000)
}

function stopTimeout() { clearInterval(timerId)};

startBtn.addEventListener('click', Start);
stopBtn.addEventListener('click', stopTimeout);