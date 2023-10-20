// Iteration 2: Generate 2 random number and display it on the screen
var num1;
var num2;

let num1_box = document.getElementById("number1");
let num2_box = document.getElementById("number2");

function generateRandomNumber() {
  num1 = Math.floor(Math.random() * 100);
  num2 = Math.floor(Math.random() * 100);
  num1_box.textContent = num1;
  num2_box.textContent = num2;
}

generateRandomNumber();

function thing(){
  score++;
  localStorage.setItem("score",score);
  generateRandomNumber();
  clearInterval(interval);
  startTimer();
}
// Iteration 3: Make the options button functional

let greater_than = document.getElementById("greater-than");
let equal_to = document.getElementById("equal-to");
let lesser_than = document.getElementById("lesser-than");
let score = 0;

greater_than.onclick = () => {
  if (num1 > num2) {
    thing()
  } else {
    window.open("./gameover.html", "_self");
  }
};

equal_to.onclick = () => {
  if (num1 === num2) {
    thing()
  } else {
    window.open("./gameover.html", "_self");
  }
};

lesser_than.onclick = () => {
  if (num2 > num1) {
   
    thing()
  } else {
    window.open("./gameover.html", "_self");
  }
};

// Iteration 4: Build a timer for the game

let time = 5;
let time_box = document.getElementById("timer");
let interval;
function startTimer() {
  time = 5;
  interval = setInterval(() => {
    if (time == -1) {
      // clearInterval(interval);
      window.open("./gameover.html", "_self");
    }
    time_box.innerHTML = time;
    time--;
  }, 1000);
}
startTimer();
localStorage.setItem("score",score);