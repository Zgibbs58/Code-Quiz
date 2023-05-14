var start = document.querySelector("#start");
var quiz = document.querySelector("#quiz");
var end = document.querySelector("#end");
var startQuiz = document.querySelector(".take-quiz-btn");
var submitBtn = document.querySelector(".submit-answer-btn");
var quizHome = document.querySelector(".submit-high-score");
var score;
var player;
var highScoreData;
var currentQuestionIndex = 0;
var timer = document.querySelector(".timer");
var timeLeft = 39;
var myInterval;
var quizQuestions = [
  {
    question: "What is the main goal of rock climbing?",
    choices: [
      "Reach the summit of a rock",
      "Live in the mountains",
      "Jump off the rock at the end",
      "Test rock quality",
    ],
    answer: 0,
    image: "assets/images/summit.png",
  },
  {
    question: "Which of the following is not a type of climbing?",
    choices: ["Lead", "Aid", "Mixed", "Trad"],
    answer: 2,
    image: "assets/images/climbing-wall.png",
  },
  {
    question: "What is a free solo?",
    choices: [
      "A climbing tool",
      "A name of an athlete",
      "A type of climbing",
      "Wearing no clothes while climbing",
    ],
    answer: 2,
    image: "assets/images/climbing-shoes.png",
  },
  {
    question: "What does kn represent?",
    choices: ["Kilo Newtons", "Killer Noobs", "Kilo Nanos", "Kava Narrow"],
    answer: 0,
    image: "assets/images/climber.png",
  },
  {
    question: "Bouldering requires a harness and a rope.",
    choices: ["True", "False"],
    answer: 1,
    image: "assets/images/rope.png",
  },
  {
    question: "What is a quickdraw?",
    choices: [
      "Western fight to the death",
      "A dynamic move to the next hold",
      "Two carabiners connected by a strong material",
      "Ascending a rope quickly",
    ],
    answer: 2,
    image: "assets/images/gear.png",
  },
];

startQuiz.addEventListener("click", function () {
  start.setAttribute("style", "display:none;");
  quiz.setAttribute("style", "display:;");
  end.setAttribute("style", "display:none;");
  // starting quiz function call
  quizQuestDisplay();
  timerStart();
});

// made the myInterval variable global so that it can be called in other functions like at the end when we submit the last question in endQuiz function
// this would work without the var myInterval; code above because myInterval declared in the function below would implicitly declare the variable
// in the global scope. But this is not good practice
function timerStart() {
  myInterval = setInterval(timerCountdown, 1000);
}
function timerCountdown() {
  // timer decreases by one every second
  timer.textContent = timeLeft;
  timeLeft--;

  if (timeLeft <= 0) {
    clearInterval(myInterval);
    timer.textContent = 0;
    endQuiz();
  }
}

function quizQuestDisplay() {
  var questionDiv = document.querySelector(".question");
  var choicesDiv = document.querySelector(".choices");
  var quizImage = document.querySelector("#quiz-images");

  var currentQuestion = quizQuestions[currentQuestionIndex];
  questionDiv.textContent = currentQuestion.question;
  quizImage.src = currentQuestion.image;

  choicesDiv.textContent = "";
  currentQuestion.choices.forEach((choice, index) => {
    var label = document.createElement("label");
    var input = document.createElement("input");
    input.type = "radio";
    input.name = "answer";
    input.value = index;
    // inputid index and label for attribute index match up values so the label text can be clicked on to relate to same radio button.
    input.id = [index];
    label.setAttribute("for", [index]);
    label.textContent = choice;

    choicesDiv.append(input, label);
  });
}
// upon click of submit button the inputs are checked and the value of the one chosen is checked against correct answer
submitBtn.addEventListener("click", quizLogicHandling);

function quizLogicHandling(event) {
  event.preventDefault();
  var allChoices = document.querySelectorAll("input");
  var userChoice = null;
  var choiceSelected = false;
  var choiceMsg = document.querySelector(".question-message");
  var loseTimeMsg = document.createElement("p");
  for (var allChoice of allChoices) {
    if (allChoice.checked) {
      userChoice = parseInt(allChoice.value);
      choiceSelected = true;
      choiceMsg.textContent = "Correct Answer";
      choiceMsg.style.color = "#0c9c5b";
      choiceMsg.style.textAlign = "center";
      choiceMsg.style.fontSize = "1.3rem";
      choiceMsg.style.fontWeight = "700";
      break;
    }
  }
  // check to make sure choice is selected if not the user cannot move on. If wrong choice selected wrong answer message and loss of time.
  if (!choiceSelected) {
    return;
  } else {
    if (userChoice !== quizQuestions[currentQuestionIndex].answer) {
      timeLeft -= 5;
      choiceMsg.innerHTML = "Wrong Answer";
      choiceMsg.style.color = "red";
      choiceMsg.style.textAlign = "center";
      choiceMsg.style.fontSize = "1.3rem";
      choiceMsg.style.fontWeight = "700";
    }
    if (currentQuestionIndex < quizQuestions.length - 1) {
      currentQuestionIndex++;
      quizQuestDisplay();
    } else {
      // added timeout to endQuiz so if the userChoice was wrong, the code for wrong choice would have time to run.
      setTimeout(endQuiz, 700);
    }
  }
}

function endQuiz() {
  // defining the score, displaying it, and setting it to local storage.
  score = timer.textContent;
  // localStorage.setItem("score", score);
  var scoreText = document.querySelector(".score-text");
  scoreText.textContent = "You're score was " + score;
  clearInterval(myInterval);
  start.setAttribute("style", "display:none;");
  quiz.setAttribute("style", "display:none;");
  end.setAttribute("style", "display:;");
}

quizHome.addEventListener("click", function (event) {
  event.preventDefault();
  player = document.querySelector(".player-input").value;
  // testing to see if highScoreData exists yet in local storage.
  if (!localStorage.getItem("highScoreData")) {
    // if not create empty array and push user input to it. Then set array to local storage.
    var highScoreData = [];
    highScoreData.push({
      name: player,
      newScore: score,
    });
    localStorage.setItem("highScoreData", JSON.stringify(highScoreData));
  } else {
    // else get local storage array and push new user input to array and set back to local storage
    highScoreData = JSON.parse(localStorage.getItem("highScoreData"));
    highScoreData.push({
      name: player,
      newScore: score,
    });
    localStorage.setItem("highScoreData", JSON.stringify(highScoreData));
  }

  window.location.href = "highScore.html";
});
