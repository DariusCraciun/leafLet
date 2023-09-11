// creating the fill in circle upon loading

const progress = document.querySelector(".circle");
const value = document.querySelector(".progress");

let progressStartValue = 0;
let progressEndValue = 45;
let speed = 10;

let p = setInterval(() => {
  progressStartValue++;

  value.textContent = `${progressStartValue}%`
  progress.style.background = `conic-gradient(rgb(6, 93, 94) ${progressStartValue * 3.6}deg, white 0deg)`


  if (progressStartValue === progressEndValue) {
    clearInterval(p);

  }
}, speed);

// timer



const countDownDate = new Date("Sept 20, 2023 00:00:00").getTime();

const timer = setInterval(function () {

  let now = new Date().getTime();

  let distance = countDownDate - now;

  // calculate timing

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // display result - countdown

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  }

}, 1000)

// hover effect for BOOK YOUR INTEREST NOW!

const books = document.getElementsByClassName('apply');

function enableHoverEffect() {
  this.style.transition = "0.3s";
  this.style.transform = "scale(1.1)";
}

function disableHoverEffect() {
  this.style.transition = "0.3s";
  this.style.transform = "scale(1.0)";
}


for (const book of books) {
  book.addEventListener("mouseenter", enableHoverEffect);
  book.addEventListener("mouseleave", disableHoverEffect);
}