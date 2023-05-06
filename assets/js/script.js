var start = document.querySelector("#start");
var quiz = document.querySelector("#quiz");
var end = document.querySelector("#end");
var startQuiz = document.querySelector(".take-quiz-btn");
var endQuiz = document.querySelector(".end-quiz-btn");
var quizHome = document.querySelector(".home-quiz-btn");

startQuiz.addEventListener("click", function () {
  start.setAttribute("style", "display:none;");
  quiz.setAttribute("style", "display:;");
  end.setAttribute("style", "display:none;");
});
endQuiz.addEventListener("click", function () {
  start.setAttribute("style", "display:none;");
  quiz.setAttribute("style", "display:none;");
  end.setAttribute("style", "display:;");
});

quizHome.addEventListener("click", function () {
  start.setAttribute("style", "display:;");
  quiz.setAttribute("style", "display:none;");
  end.setAttribute("style", "display:none;");
});

var startQuiz = document.querySelector(".take-quiz-btn");
var timer = document.querySelector(".timer");
console.log(timer);

startQuiz.addEventListener("click", function takeQuiz() {
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

var quiz = [
  {
    question: "What is your favorite day?",
    choices: ["Monday", "Wednesday", "Friday", "Saturday"],
    answer: 0,
  },
  {
    question: "What is your favorite day?",
    choices: ["Monday", "Wednesday", "Friday", "Saturday"],
    answer: 0,
  },
];

function startQuiz() {
  var question = document.querySelector(".question");
  var choices = document.querySelector(".choices");

  var currentQuestion = quiz;
}
