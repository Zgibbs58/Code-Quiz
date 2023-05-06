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
  // starting quiz function call
  quizStart();
});
// endQuiz.addEventListener("click", function () {
//   start.setAttribute("style", "display:none;");
//   quiz.setAttribute("style", "display:none;");
//   end.setAttribute("style", "display:;");
// });

quizHome.addEventListener("click", function () {
  start.setAttribute("style", "display:;");
  quiz.setAttribute("style", "display:none;");
  end.setAttribute("style", "display:none;");
});

var currentQuestionIndex = 0;
var answer = [];

var quizQuestions = [
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

var currentQuestionIndex = 0;
var answer = [];

function quizStart() {
  var questionDiv = document.querySelector(".question");
  var choicesDiv = document.querySelector(".choices");

  var currentQuestion = quizQuestions[currentQuestionIndex];
  questionDiv.textContent = currentQuestion.question;

  currentQuestion.choices.forEach((choice, index) => {
    var label = document.createElement("label");
    var li = document.createElement("li");
    var input = document.createElement("input");
    input.type = "radio";
    input.name = "answer";
    input.value = index;
    label.textContent = choice;

    li.appendChild(input);
    li.appendChild(label);
    choicesDiv.appendChild(li);
  });
}

// var startQuiz = document.querySelector(".take-quiz-btn");
// var timer = document.querySelector(".timer");
// console.log(timer);

// startQuiz.addEventListener("click", function takeQuiz() {
//   var timeLeft = 15;

//   var myInterval = setInterval(function () {
//     timeLeft--;
//     timer.textContent = timeLeft;

//     if (timeLeft === 0) {
//       clearInterval(myInterval);
//       timer.textContent = 0;
//     }
//   }, 1000);
// });
