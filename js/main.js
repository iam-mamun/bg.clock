const hourEl = document.querySelector('.hour');
const minEl = document.querySelector('.min');
const secEl = document.querySelector('.sec');

setInterval(function() {
    const date = new Date();

    let hour = date.getHours() / 12 * 360 - 90;
    let min = date.getMinutes() / 60 * 360 - 90;
    let sec = date.getSeconds() / 60 * 360 - 90; 

    hourEl.style.transform = `rotate(${hour}deg)`;
    minEl.style.transform = `rotate(${min}deg)`;
    secEl.style.transform = `rotate(${sec}deg)`;
}, 1000)