const digitalClock = document.querySelector('.digital-clock__time');
const compassClockSec = document.querySelector('.compass-clock__secs');
const compassClockMinute = document.querySelector('.compass-clock__mins');
const compassClockHours = document.querySelector('.compass-clock__hrs');
const compassClockDays = document.querySelector('.compass-clock__days');
const compassClockWeeks = document.querySelector('.compass-clock__weeks');
const compassClockMonths = document.querySelector('.compass-clock__months');

let date = new Date();
let months = date.getMonth();
let days = date.getDate();
let weeks = date.getDay();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
digitalClock.textContent = `${hours}:${minutes}:${seconds}`;

let secElements = '';
let minElements = '';
let hourElements = '';
let dayElements = '';
let weekElements = '';
let monthElements = '';

for (let i = 0; i <= 59; i++) {
    secElements += `<div class="sec" >${i} sec</div>`;
    minElements += `<div class="min" >${i} min</div>`
}
for (let i = 0; i <= 23; i++) {
    hourElements += `<div class="hr">${i} hr</div>`
}
for (let i = 1; i <= 31; i++) {
    dayElements += `<div class="day">${i} day</div>`
}
for (let i = 0; i <= 6; i++) {
    switch (i) {
        case 0: {
            weekElements += `<div class="week">Sunday</div>`;
            break;
        }
        case 1: {
            weekElements += `<div class="week">Monday</div>`;
            break;
        }
        case 2: {
            weekElements += `<div class="week">Tuesday</div>`;
            break;
        }
        case 3: {
            weekElements += `<div class="week">Wednesday</div>`;
            break;
        }
        case 4: {
            weekElements += `<div class="week">Thursday</div>`;
            break;
        }
        case 5: {
            weekElements += `<div class="week">Friday</div>`;
            break;
        }
        case 6: {
            weekElements += `<div class="week">Saturday</div>`;
            break;
        }
    }
}
for (let i = 1; i <= 12; i++) {
    monthElements += ` <div class="compass-clock__month">${i} month</div>`
}
compassClockHours.innerHTML = hourElements;
compassClockSec.innerHTML = secElements;
compassClockMinute.innerHTML = minElements;
compassClockDays.innerHTML = dayElements;
compassClockMonths.innerHTML = monthElements;
compassClockWeeks.innerHTML = weekElements;

let secItems = compassClockSec.querySelectorAll('.sec');
let minItems = compassClockMinute.querySelectorAll('.min');
let dayItems = compassClockDays.querySelectorAll('.day');
let hrItems = compassClockHours.querySelectorAll('.hr');
let weekItems = compassClockWeeks.querySelectorAll('.week');
let monthItems = compassClockMonths.querySelectorAll('.compass-clock__month');

for (let i = 0; i < secItems.length; i++) {
    secItems[i].addEventListener('transitionend', function () {
        if (seconds === 59) {
            secItems[i].style.transition = 'none';
            secItems[i].style.transform = `rotate(${-i * 6 - 6}deg)`;
            secItems[i].style.transition = 'transform .6s';
        }
    })
}



function getTime() {
    // if (hour < 10)
    date = new Date();
    months = date.getMonth();
    days = date.getDate();
    weeks = date.getDay();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    // if(hours < 10) {hours = '0' + hours}
    // if(minutes < 10) {minutes = '0' + minutes}
    // if(seconds < 10) {seconds = '0' + seconds}
    digitalClock.textContent = `${hours}:${minutes}:${seconds}`;

    for (let i = 0; i < secItems.length; i++) {
        secItems[i].style.transition = 'transform .6s';
        secItems[i].style.transform = `rotate(${-i * 6 + seconds * 6}deg)`;
        secItems[i].classList.remove('active');
    }

    for (let i = 0; i < minItems.length; i++) {
        minItems[i].style.transition = 'transform .5s';
        minItems[i].style.transform = `rotate(${-i * 6 + minutes * 6}deg)`;
        minItems[i].classList.remove('active')
    }

    for (let i = 0; i <= 23; i++) {
        hrItems[i].style.transform = `rotate(${-i * 15 + hours * 15}deg)`;
        hrItems[i].classList.remove('active')
    }

    for (let i = 0; i < 31; i++) {
        dayItems[i].style.transform = `rotate(${-i * 360 / 31 + days * 360 / 31 - 360 / 31}deg)`;
        dayItems[i].classList.remove('active')
    }

    for (let i = 0; i <= 6; i++) {
        weekItems[i].style.transform = `rotate(${-i * 20 + weeks * 20}deg)`;
        weekItems[i].classList.remove('active')
    }

    for (let i = 0; i <= 11; i++) {
        monthItems[i].style.transform = `rotate(${-i * 30 + months * 30}deg)`;
        monthItems[i].classList.remove('active')
    }

    monthItems[months].classList.add('active');
    weekItems[weeks].classList.add('active');
    dayItems[days - 1].classList.add('active');
    hrItems[hours].classList.add('active');
    minItems[minutes].classList.add('active');
    secItems[seconds].classList.add('active');
}

setInterval(getTime, 1000)
