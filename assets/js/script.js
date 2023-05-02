var takeQuizBtn = document.querySelector(".take-quiz-btn");
var timer = document.querySelector(".timer");
console.log(timer);

takeQuizBtn.addEventListener("click", function takeQuiz() {
  var timeLeft = 15;

  var myInterval = setInterval(function () {
    timeLeft--;
    timer.textContent = timeLeft;

    if (timeLeft === 0) {
      clearInterval(myInterval);
      timer.textContent = 0;
    }
  }, 1000);
});
