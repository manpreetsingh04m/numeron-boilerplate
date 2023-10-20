// Iteration 5: Store the player score and display it on the game over screen
var play_again = document.getElementById("play-again-button");
play_again.onclick = () => {
  window.open("./game.html", "_self");
};
var score_board = document.getElementById("score-board");
let value=localStorage.getItem("score");
score_board.innerHTML = value;
