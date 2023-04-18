let display = document.getElementById('stopwatch');
let start = document.getElementById('start-btn');
let stop = document.getElementById('stop-btn');
let reset = document.getElementById('reset-btn');

start.addEventListener('click', startWatch);
stop.addEventListener('click', stopWatch);
reset.addEventListener('click', resetWatch);

let seconds = 0;
let minutes = 0;
let hours = 0;
var watchInterval;

function startWatch() {
    watchInterval = setInterval(() => {

        seconds++;

        if (seconds === 60) {
            minutes++;
            seconds = 0;
        }
        
        if (minutes === 60) {
            hours++;
            minutes = 0;
        }

        display.innerHTML = addZero(hours) + ':' + addZero(minutes) + ':' + addZero(seconds);

    }, 1000);
}

function addZero(value) {
    if (value < 10) {
        return '0' + value;
    }
    return value;
}

function stopWatch() {
    clearInterval(watchInterval);
}

function resetWatch() {
    seconds = 0;
    minutes = 0;
    hours = 0;

    display.innerHTML = '00:00:00';
}