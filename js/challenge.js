let seconds = 0;
let counterOn = false
const counter = document.getElementById("counter");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const heart = document.getElementById("heart");
const pause = document.getElementById("pause");
const likes = document.getElementById("likes");
const submit = document.getElementById("submit");

// initialize counter
const startCounter = () => {
  interval = setInterval(() => {increment()}, 1000)
  counterOn = true
  pause.innerHTML = 'stop'
}

document.addEventListener("DOMContentLoaded", startCounter())

// button click actions
document.addEventListener("click", (e) => {
  if (e.target === plus) {
    increment()
  } else if (e.target === minus) {
    decrement()
  } else if (e.target === heart) {
    like()
  } else if (e.target === pause && counterOn === true) {
    pauseCounter()
  } else if (e.target === pause && counterOn === false) {
    startCounter()
  }
})

// button functions
const increment = () => {
  seconds++
  counter.innerText = seconds
}

const decrement = () => {
  if (seconds > 0) {
    seconds -= 1
  } 
  counter.innerText = seconds
}

const like = () => {
  const newLike = document.createElement('li')
  likes.appendChild(newLike)
  newLike.innerText = `${counter.innerHTML} has been liked!`

  
}

const pauseCounter = () => {
  clearInterval(interval)
  counterOn = false
  pause.innerHTML = 'start'

}

// prevent form submission
document.addEventListener('click', (e) => {
  if (e.target === submit) {
    event.preventDefault()
    postComment()
  }
})

