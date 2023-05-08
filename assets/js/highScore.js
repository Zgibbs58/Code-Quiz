function renderPlayersScores() {
  var addScore = JSON.parse(localStorage.getItem("highScoreData"));
  var scoreLi = document.createElement("li");
  var scoreUl = document.querySelector(".high-score-list");
  scoreLi.innerText =
    "Name: " + addScore.name + "\n Score: " + addScore.newScore;
  scoreUl.appendChild(scoreLi);

  // if (lastGrade !== null) {
  //   document.querySelector(".message").textContent = lastGrade.student +
  //   " received a/an " + lastGrade.grade
  // }
}
renderPlayersScores();
