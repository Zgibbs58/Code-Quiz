// var playersScores = [];
// function renderPlayersScores() {
//   for (var i = 0; i < playersScores.length; i++) {
//     var playerScore = playersScores[i];
//     var addScore = JSON.parse(localStorage.getItem("highScoreData"));
//     var scoreLi = document.createElement("li");
//     var scoreUl = document.querySelector(".high-score-list");
//     scoreLi.textContent = playerScore;

//     scoreUl.appendChild(scoreLi);
//     // playersScores.push;
//   }
// }
var playerScore = [];
function renderPlayersScores() {
  var addScore = JSON.parse(localStorage.getItem("highScoreData"));
  var scoreLi = document.createElement("li");
  var scoreUl = document.querySelector(".high-score-list");
  scoreLi.innerText =
    "Name: " + addScore.name + "\n Score: " + addScore.newScore;
  scoreUl.appendChild(scoreLi);
}
console.log(playerScore);
renderPlayersScores();
