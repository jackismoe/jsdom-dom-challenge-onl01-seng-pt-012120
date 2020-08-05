// counter
let seconds = 0;
let counter = document.getElementById("counter");
let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let heart = document.getElementById("heart");
let pause = document.getElementById("pause");

window.setInterval(function () {
  increment();
}, 1000)

function increment() {
  seconds++;
  counter.innerText = seconds;
}

function decrement() {
  seconds -= 1;
  counter.innerText = seconds;
}

