var clearScoreBtn = document.querySelector(".high-score-clear");

clearScoreBtn.addEventListener("click", function () {
  localStorage.removeItem("highScoreData");
  location.reload();
});

function renderPlayersScores() {
  // only added the if statement so no error would show if the highScoreData array hasn't been created in local storage yet
  if (localStorage.getItem("highScoreData")) {
    var addScore = JSON.parse(localStorage.getItem("highScoreData"));
    // function to grab addScore array and sort by score from highest to lowest.
    addScore.sort(function (a, b) {
      return b.newScore - a.newScore;
    });
    console.log(addScore);
    for (let index = 0; index < addScore.length; index++) {
      var scoreDiv = document.createElement("div");
      var scoreSection = document.querySelector(".high-score-list");
      scoreDiv.innerText =
        // "Name - " +
        addScore[index].name + "\n " + addScore[index].newScore;
      scoreSection.appendChild(scoreDiv);
    }
  }
}

renderPlayersScores();
