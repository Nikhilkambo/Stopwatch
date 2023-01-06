window.onload = function () {
  let seconds = 0;
  let tens = 0;
  let minutes = 0;
  let appendTens = document.getElementById("tens");
  let appendSeconds = document.getElementById("seconds");
  let appendMin = document.getElementById("minutes");
  let buttonStart = document.getElementById("button-start");
  let buttonStop = document.getElementById("button-stop");
  let buttonReset = document.getElementById("button-reset");
  let Interval;
  buttonStart.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  };
  buttonStop.onclick = function () {
    clearInterval(Interval);
  };
  buttonReset.onclick = function () {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    minutes = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
    appendMin.innerHTML = minutes;
  };
  function startTimer() {
    tens++;

    if (tens <= 9) {
      appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
      appendTens.innerHTML = tens;
    }

    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }

    if (seconds <= 9) {
      appendSeconds.innerHTML = "0" + seconds;
    }

    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }
    if (seconds > 59) {
      console.log("min");
      minutes++;
      if (minutes > 9) {
        appendMin.innerHTML = minutes;
      } else {
        appendMin.innerHTML = "0" + minutes;
      }
      seconds = 0;
      appendSeconds.innerHTML = "0" + 0;
    }
  }
};
