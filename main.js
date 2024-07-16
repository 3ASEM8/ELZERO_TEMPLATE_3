// The End Of The Year Date To Countdown To
// 1000 milliseconds = 1 Second

let countDownDate = new Date(
  `jun 20, ${new Date().getFullYear()} 00:00:00`
).getTime();
// console.log(countDownDate);

let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();

  // Find The Date Difference Between Now And Countdown Date
  let dateDiff = countDownDate - dateNow;

  // Get Time Units
  // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);

let tagreb = new Date().getTime();
console.log(tagreb);
//! ===================

let yeer = document.querySelector(".events .info h2");
yeer.textContent = `Tech Masters Event ${new Date().getFullYear()}`;
//!=============================

let section = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".progress span");

window.addEventListener("scroll", function () {
  if (window.scrollY >= section.offsetTop - 500) {
    spans.forEach((span) => {
      span.style.width = span.dataset.progress;
    });
  } else {
    spans.forEach((span) => {
      span.style.width = 0;
    });
  }
});
