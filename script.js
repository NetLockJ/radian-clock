const hour = document.getElementById("hr");
const minute = document.getElementById("min");
const second = document.getElementById("sec");

const date = new Date();

let totalSecs = date.getSeconds() + (date.getMinutes() * 60) + (date.getHours() * 3600);
let totalMins = date.getMinutes() + (date.getSeconds() / 60) + (date.getHours() * 60);
let totalHours = date.getHours() + (date.getMinutes() / 60);

updateHands();

function rotateTo(element, radians) {
  element.style.transform = `rotate(${(-radians + Math.PI / 2)}rad)`;
}

function updateHands() {
  const tHour = (totalHours / 12) * Math.PI * 2;
  const tMin = (totalMins / 60) * Math.PI * 2;
  const tSec = (totalSecs / 60) * Math.PI * 2;

  rotateTo(hour, tHour);
  rotateTo(minute, tMin);
  rotateTo(second, tSec);
}

function tick() {
  // Increment continuously so it never hits 0 and wraps backward
  totalSecs += 1;
  totalMins += 1 / 60;
  totalHours += 1 / 3600;

  updateHands();
}

setInterval(tick, 1000);