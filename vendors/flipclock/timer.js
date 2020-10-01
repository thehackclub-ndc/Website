
var timer = function() {};
timer.countdownDate = new Date("Oct 1, 2020 16:49:20").getTime();

/*
* Get thing started
*/
timer.init = function() {
  timer.getReferences();
  
  
  timer.getTimes();
  timer.endOftime = setInterval(function() { timer.update() }, 1000);
}

/*
* Save references of timer section
*/
timer.getReferences = function() {
  timer.timer = document.getElementById("timer");
  timer.days = timer.timer.querySelectorAll(".days .timer__number")[0];
  timer.hours = timer.timer.querySelectorAll(".hours .timer__number")[0];
  timer.minutes = timer.timer.querySelectorAll(".minutes .timer__number")[0];
  timer.seconds = timer.timer.querySelectorAll(".seconds .timer__number")[0];
}

/*
* remember time units for later use
*/
timer.getTimes = function() {
  timer.times = {};
  timer.times.second = 1000;
  timer.times.minute = timer.times.second * 60;
  timer.times.hour = timer.times.minute * 60;
  timer.times.day = timer.times.hour * 24;
}

/*
* Update the countdown
*/
timer.update = function() {
  if ( timer.timer.style.opacity !== 1 ) {
    timer.timer.style.opacity = 1;
  }
  
  timer.currentDate = new Date().getTime();;
  timer.difference = timer.countdownDate - timer.currentDate;
  
  let d = timer.getTimeRemaining(timer.times.day, 1);
  let h = timer.getTimeRemaining(timer.times.hour, 24);
  let m = timer.getTimeRemaining(timer.times.minute, 60);
  let s = timer.getTimeRemaining(timer.times.second, 60);

  timer.days.innerHTML = d
  timer.hours.innerHTML = h
  timer.minutes.innerHTML = m
  timer.seconds.innerHTML = s
  
  if(d==0 && h==0 && m==0 && s==0 ){
    clearInterval(timer.endOftime);
  }
}

/*
* calculate remaining time based on a unit of time
*/
timer.getTimeRemaining = function( timeUnit, divisor ) {
  var n;
  if ( divisor == 1 ) {
    n = Math.floor(timer.difference / timeUnit );
  }
  else {
    n = Math.floor((timer.difference / timeUnit) % divisor );
  }
  
  if ( String(n).length < 2 ) {
    n = "0" + n;
  }
  
  return n;
}

window.addEventListener("load", function() {
  timer.init();
});
