var start = document.querySelector("#start");
var quiz = document.querySelector("#quiz");
var end = document.querySelector("#end");
var startQuiz = document.querySelector(".take-quiz-btn");
var submitBtn = document.querySelector(".submit-answer-btn");
var quizHome = document.querySelector(".home-quiz-btn");

startQuiz.addEventListener("click", function () {
  start.setAttribute("style", "display:none;");
  quiz.setAttribute("style", "display:;");
  end.setAttribute("style", "display:none;");
  // starting quiz function call
  quizStart();
});
// submitBtn.addEventListener("click", function () {
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
    answer: 2,
  },
  {
    question: "What is your favorite day?",
    choices: ["Monday", "Wednesday", "Friday", "Saturday"],
    answer: 3,
  },
];

var currentQuestionIndex = 0;
var userAnswers = [];

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
    // inputid index and label for attribute index match up values so the label text can be clicked on to relate to same radio button.
    input.id = [index];
    label.setAttribute("for", [index]);
    label.textContent = choice;

    li.appendChild(input);
    li.appendChild(label);
    choicesDiv.appendChild(li);
  });
}
// upon click of submit button the inputs are checked and the value of the one chosen is consoled
submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  var allChoices = document.querySelectorAll("input");

  for (var allChoice of allChoices) {
    if (allChoice.checked) {
      var userChoice = allChoice.value;
      console.log(allChoice.value);
    }
  }
  console.log(quizQuestions[currentQuestionIndex].answer);
  if (userChoice == quizQuestions[currentQuestionIndex].answer) {
    console.log("true");
  }
  // function checkAnswers() {
  //   let score = 0;

  //   quizQuestions.forEach((quizQuestion, index) => {});
  // }
});

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
