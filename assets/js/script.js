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
  quizQuestDisplay();
  timerStart();
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

var quizQuestions = [
  {
    question: "What is your favorite day?",
    choices: ["Monday", "Wednesday", "Friday", "Saturday"],
    answer: 2,
  },
  {
    question: "What is your favorite color?",
    choices: ["red", "purple", "green", "blue"],
    answer: 3,
  },
  {
    question: "What is your favorite food?",
    choices: ["burgers", "fried chicken", "steak", "pizza"],
    answer: 0,
  },
  {
    question: "What is your favorite vacation?",
    choices: ["mountains", "beach", "lake", "casino"],
    answer: 0,
  },
];

var currentQuestionIndex = 0;
var timer = document.querySelector(".timer");
var timeLeft = 35;
var myInterval;
// made the myInterval variable global so that it can be called in other functions like at the end when we submit the last question
// this would work without the var myInterval; code above because myInterval declared in the function below would implicitly declare the variable
// in the global scope. But this is not good practice
function timerStart() {
  myInterval = setInterval(timerCountdown, 1000);
}
function timerCountdown() {
  timer.textContent = timeLeft;
  timeLeft--;

  if (timeLeft <= 0) {
    clearInterval(myInterval);
    timer.textContent = 0;
  }
}

function quizQuestDisplay() {
  var questionDiv = document.querySelector(".question");
  var choicesDiv = document.querySelector(".choices");

  var currentQuestion = quizQuestions[currentQuestionIndex];
  questionDiv.textContent = currentQuestion.question;

  choicesDiv.textContent = "";
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
      var userChoice = parseInt(allChoice.value);
    } else {
      // add error handling here for no answer chosen
    }
  }
  if (userChoice !== quizQuestions[currentQuestionIndex].answer) {
    timeLeft -= 5;
  }
  if (currentQuestionIndex < quizQuestions.length - 1) {
    currentQuestionIndex++;
    quizQuestDisplay();
  } else {
    // defining the score, displaying it, and setting it to local storage.
    var score = timer.textContent;
    localStorage.setItem("score", score);
    var scoreText = document.querySelector(".score-text");
    scoreText.textContent = "You're score was " + score;
    clearInterval(myInterval);
    start.setAttribute("style", "display:none;");
    quiz.setAttribute("style", "display:none;");
    end.setAttribute("style", "display:;");
  }
});
