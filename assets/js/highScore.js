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
  // only added the if statement so no error would show if the highScoreData array hasn't been created in local storage yet
  if (localStorage.getItem("highScoreData")) {
    var addScore = JSON.parse(localStorage.getItem("highScoreData"));
    console.log(addScore);
    for (let index = 0; index < addScore.length; index++) {
      var scoreLi = document.createElement("li");
      var scoreUl = document.querySelector(".high-score-list");
      scoreLi.innerText =
        "Name - " +
        addScore[index].name +
        "\nScore - " +
        addScore[index].newScore;
      scoreUl.appendChild(scoreLi);
    }
  }
}

renderPlayersScores();
