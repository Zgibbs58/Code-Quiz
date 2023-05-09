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

function renderPlayersScores() {
  var addScore = JSON.parse(localStorage.getItem("highScoreData"));
  console.log(addScore);
  var scoreLi = document.createElement("li");
  var scoreUl = document.querySelector(".high-score-list");
  scoreLi.innerText =
    "Name: " + addScore[0].name + "\n Score: " + addScore[0].newScore;
  scoreUl.appendChild(scoreLi);
}

renderPlayersScores();
