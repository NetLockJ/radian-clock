hour = document.getElementById("hr");
minute = document.getElementById("min");
second = document.getElementById("sec");

updateTime();

function rotateTo(element, radians) {
  element.style.transform = `rotate(${(-radians + Math.PI / 2)}rad)`;
}

function updateTime() {
  var date = new Date();

  tHour = (date.getHours() / 12) * Math.PI * 2;
  tMin = (date.getMinutes() / 60) * Math.PI * 2;
  tSec = (date.getSeconds() / 60) * Math.PI * 2;

  console.log(tHour, tMin, tSec)

  rotateTo(hour , tHour + (Math.PI / 6) * (date.getMinutes() / 60 + date.getSeconds() / 3600));
  rotateTo(minute, tMin + (Math.PI / 180.0) * 6 * (date.getSeconds() / 60));
  rotateTo(second, tSec);

  // document.getElementById("display-time").innerHTML = `\\(\\large{\\frac{\\pi}{2}}\\)`;
  // MathJax.typeset();
}

setInterval(updateTime, 1000);
