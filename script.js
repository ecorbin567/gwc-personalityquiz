var javaScore = 0;
var pythonScore = 0;
var rScore = 0;
var htmlScore = 0;

var questionCount = 0;

var greatest = 0
var language = ''

function performQuiz() {


  function java() {
    if (questionCount < 5) {
      javaScore += 1;
      questionCount += 1;
      console.log("question count = " + questionCount + " java score = " + javaScore);
    }
  }
  function python() {
    if (questionCount < 5) {
      pythonScore += 1;
      questionCount += 1;
      console.log("question count = " + questionCount + " python score = " + pythonScore);
    }
  }
  function r() {
    if (questionCount < 5) {
      rScore += 1;
      questionCount += 1;
      console.log("question count = " + questionCount + " r score = " + rScore);
    }
  }
  function html() {
    if (questionCount < 5) {
      htmlScore += 1;
      questionCount += 1;
      console.log("question count = " + questionCount + " html score = " + htmlScore);
    }
  }

  function calculateResults() {
    if (questionCount == 5) {
      const scores = [javaScore, pythonScore, rScore, htmlScore];
      const languageNames = ["Java", "Python", "R", "HTML"];
      for (var i = 0; i < 6; i++) {
        if (scores[i] > greatest) {
          language = languageNames[i];
          greatest = scores[i];
        }
        if (greatest > 0) {
          result.innerHTML = "You are " + language + "!"
        }
      }
    }
  }

  function restartQuiz() {
    questionCount = 0;
    javaScore = 0;
    pythonScore = 0;
    rScore = 0;
    htmlScore = 0;
    console.log("Restarted!");
    location.reload();
    document.getElementById("q1a1").disabled = false;
    document.getElementById("q1a2").disabled = false;
    document.getElementById("q1a3").disabled = false;
    document.getElementById("q1a4").disabled = false;
    document.getElementById("q2a1").disabled = false;
    document.getElementById("q2a2").disabled = false;
    document.getElementById("q2a3").disabled = false;
    document.getElementById("q2a4").disabled = false;
    document.getElementById("q3a1").disabled = false;
    document.getElementById("q3a2").disabled = false;
    document.getElementById("q3a3").disabled = false;
    document.getElementById("q3a4").disabled = false;
    document.getElementById("q4a1").disabled = false;
    document.getElementById("q4a2").disabled = false;
    document.getElementById("q4a3").disabled = false;
    document.getElementById("q4a4").disabled = false;
    document.getElementById("q5a1").disabled = false;
    document.getElementById("q5a2").disabled = false;
    document.getElementById("q5a3").disabled = false;
    document.getElementById("q5a4").disabled = false;
    performQuiz();
  }

  function q1a1disable() {
    document.getElementById("q1a2").style.opacity = 0.3;
    document.getElementById("q1a3").style.opacity = 0.3;
    document.getElementById("q1a4").style.opacity = 0.3;
  }
  function q1a2disable() {
    document.getElementById("q1a1").style.opacity = 0.3;
    document.getElementById("q1a3").style.opacity = 0.3;
    document.getElementById("q1a4").style.opacity = 0.3;
  }
  function q1a3disable() {
    document.getElementById("q1a1").style.opacity = 0.3;
    document.getElementById("q1a2").style.opacity = 0.3;
    document.getElementById("q1a4").style.opacity = 0.3;
  }
  function q1a4disable() {
    document.getElementById("q1a1").style.opacity = 0.3;
    document.getElementById("q1a2").style.opacity = 0.3;
    document.getElementById("q1a3").style.opacity = 0.3;
  }

  function q2a1disable() {
    document.getElementById("q2a2").style.opacity = 0.3;
    document.getElementById("q2a3").style.opacity = 0.3;
    document.getElementById("q2a4").style.opacity = 0.3;
  }
  function q2a2disable() {
    document.getElementById("q2a1").style.opacity = 0.3;
    document.getElementById("q2a3").style.opacity = 0.3;
    document.getElementById("q2a4").style.opacity = 0.3;
  }
  function q2a3disable() {
    document.getElementById("q2a1").style.opacity = 0.3;
    document.getElementById("q2a2").style.opacity = 0.3;
    document.getElementById("q2a4").style.opacity = 0.3;
  }
  function q2a4disable() {
    document.getElementById("q2a1").style.opacity = 0.3;
    document.getElementById("q2a2").style.opacity = 0.3;
    document.getElementById("q2a3").style.opacity = 0.3;
  }

  function q3a1disable() {
    document.getElementById("q3a2").style.opacity = 0.3;
    document.getElementById("q3a3").style.opacity = 0.3;
    document.getElementById("q3a4").style.opacity = 0.3;
  }
  function q3a2disable() {
    document.getElementById("q3a1").style.opacity = 0.3;
    document.getElementById("q3a3").style.opacity = 0.3;
    document.getElementById("q3a4").style.opacity = 0.3;
  }
  function q3a3disable() {
    document.getElementById("q3a1").style.opacity = 0.3;
    document.getElementById("q3a2").style.opacity = 0.3;
    document.getElementById("q3a4").style.opacity = 0.3;
  }
  function q3a4disable() {
    document.getElementById("q3a1").style.opacity = 0.3;
    document.getElementById("q3a2").style.opacity = 0.3;
    document.getElementById("q3a3").style.opacity = 0.3;
  }

  function q4a1disable() {
    document.getElementById("q4a2").style.opacity = 0.3;
    document.getElementById("q4a3").style.opacity = 0.3;
    document.getElementById("q4a4").style.opacity = 0.3;
  }
  function q4a2disable() {
    document.getElementById("q4a1").style.opacity = 0.3;
    document.getElementById("q4a3").style.opacity = 0.3;
    document.getElementById("q4a4").style.opacity = 0.3;
  }
  function q4a3disable() {
    document.getElementById("q4a1").style.opacity = 0.3;
    document.getElementById("q4a2").style.opacity = 0.3;
    document.getElementById("q4a4").style.opacity = 0.3;
  }
  function q4a4disable() {
    document.getElementById("q4a1").style.opacity = 0.3;
    document.getElementById("q4a2").style.opacity = 0.3;
    document.getElementById("q4a3").style.opacity = 0.3;
  }

  function q5a1disable() {
    document.getElementById("q5a2").style.opacity = 0.3;
    document.getElementById("q5a3").style.opacity = 0.3;
    document.getElementById("q5a4").style.opacity = 0.3;
  }
  function q5a2disable() {
    document.getElementById("q5a1").style.opacity = 0.3;
    document.getElementById("q5a3").style.opacity = 0.3;
    document.getElementById("q5a4").style.opacity = 0.3;
  }
  function q5a3disable() {
    document.getElementById("q5a1").style.opacity = 0.3;
    document.getElementById("q5a2").style.opacity = 0.3;
    document.getElementById("q5a4").style.opacity = 0.3;
  }
  function q5a4disable() {
    document.getElementById("q5a1").style.opacity = 0.3;
    document.getElementById("q5a2").style.opacity = 0.3;
    document.getElementById("q5a3").style.opacity = 0.3;
  }

  function q1disable() {
    document.getElementById("q1a1").disabled = true;
    document.getElementById("q1a2").disabled = true;
    document.getElementById("q1a3").disabled = true;
    document.getElementById("q1a4").disabled = true;
  }
  function q2disable() {
    document.getElementById("q2a1").disabled = true;
    document.getElementById("q2a2").disabled = true;
    document.getElementById("q2a3").disabled = true;
    document.getElementById("q2a4").disabled = true;
  }
  function q3disable() {
    document.getElementById("q3a1").disabled = true;
    document.getElementById("q3a2").disabled = true;
    document.getElementById("q3a3").disabled = true;
    document.getElementById("q3a4").disabled = true;
  }
  function q4disable() {
    document.getElementById("q4a1").disabled = true;
    document.getElementById("q4a2").disabled = true;
    document.getElementById("q4a3").disabled = true;
    document.getElementById("q4a4").disabled = true;
  }
  function q5disable() {
    document.getElementById("q5a1").disabled = true;
    document.getElementById("q5a2").disabled = true;
    document.getElementById("q5a3").disabled = true;
    document.getElementById("q5a4").disabled = true;
  }

  var q1a1 = document.getElementById("q1a1");
  q1a1.addEventListener("click", java);
  q1a1.addEventListener("click", q1a1disable);
  q1a1.addEventListener("click", q1disable);
  var q1a2 = document.getElementById("q1a2");
  q1a2.addEventListener("click", r);
  q1a2.addEventListener("click", q1a2disable);
  q1a2.addEventListener("click", q1disable);
  var q1a3 = document.getElementById("q1a3");
  q1a3.addEventListener("click", python);
  q1a3.addEventListener("click", q1a3disable);
  q1a3.addEventListener("click", q1disable);
  var q1a4 = document.getElementById("q1a4");
  q1a4.addEventListener("click", html);
  q1a4.addEventListener("click", q1a4disable);
  q1a4.addEventListener("click", q1disable);

  var q2a1 = document.getElementById("q2a1");
  q2a1.addEventListener("click", python);
  q2a1.addEventListener("click", q2a1disable);
  q2a1.addEventListener("click", q2disable);
  var q2a2 = document.getElementById("q2a2");
  q2a2.addEventListener("click", r);
  q2a2.addEventListener("click", q2a2disable);
  q2a2.addEventListener("click", q2disable);
  var q2a3 = document.getElementById("q2a3");
  q2a3.addEventListener("click", java);
  q2a3.addEventListener("click", q2a3disable);
  q2a3.addEventListener("click", q2disable);
  var q2a4 = document.getElementById("q2a4");
  q2a4.addEventListener("click", html);
  q2a4.addEventListener("click", q2a4disable);
  q2a4.addEventListener("click", q2disable);

  var q3a1 = document.getElementById("q3a1");
  q3a1.addEventListener("click", html);
  q3a1.addEventListener("click", q3a1disable);
  q3a1.addEventListener("click", q3disable);
  var q3a2 = document.getElementById("q3a2");
  q3a2.addEventListener("click", java);
  q3a2.addEventListener("click", q3a2disable);
  q3a2.addEventListener("click", q3disable);
  var q3a3 = document.getElementById("q3a3");
  q3a3.addEventListener("click", r);
  q3a3.addEventListener("click", q3a3disable);
  q3a3.addEventListener("click", q3disable);
  var q3a4 = document.getElementById("q3a4");
  q3a4.addEventListener("click", python);
  q3a4.addEventListener("click", q3a4disable);
  q3a4.addEventListener("click", q3disable);

  var q4a1 = document.getElementById("q4a1");
  q4a1.addEventListener("click", python);
  q4a1.addEventListener("click", q4a1disable);
  q4a1.addEventListener("click", q4disable);
  var q4a2 = document.getElementById("q4a2");
  q4a2.addEventListener("click", r);
  q4a2.addEventListener("click", q4a2disable);
  q4a2.addEventListener("click", q4disable);
  var q4a3 = document.getElementById("q4a3");
  q4a3.addEventListener("click", html);
  q4a3.addEventListener("click", q4a3disable);
  q4a3.addEventListener("click", q4disable);
  var q4a4 = document.getElementById("q4a4");
  q4a4.addEventListener("click", java);
  q4a4.addEventListener("click", q4a4disable);
  q4a4.addEventListener("click", q4disable);

  var q5a1 = document.getElementById("q5a1");
  q5a1.addEventListener("click", java);
  q5a1.addEventListener("click", q5a1disable);
  q5a1.addEventListener("click", q5disable);
  var q5a2 = document.getElementById("q5a2")
  q5a2.addEventListener("click", html);
  q5a2.addEventListener("click", q5a2disable);
  q5a2.addEventListener("click", q5disable);
  var q5a3 = document.getElementById("q5a3");
  q5a3.addEventListener("click", python);
  q5a3.addEventListener("click", q5a3disable);
  q5a3.addEventListener("click", q5disable);
  var q5a4 = document.getElementById("q5a4");
  q5a4.addEventListener("click", r);
  q5a4.addEventListener("click", q5a4disable);
  q5a4.addEventListener("click", q5disable);

  var calculate = document.getElementById("calculate").addEventListener("click", calculateResults);
  var restart = document.getElementById("restart").addEventListener("click", restartQuiz);

}

function java() {
  if (questionCount < 5) {
    javaScore += 1;
    questionCount += 1;
    console.log("question count = " + questionCount + " java score = " + javaScore);
  }
}
function python() {
  if (questionCount < 5) {
    pythonScore += 1;
    questionCount += 1;
    console.log("question count = " + questionCount + " python score = " + pythonScore);
  }
}
function r() {
  if (questionCount < 5) {
    rScore += 1;
    questionCount += 1;
    console.log("question count = " + questionCount + " r score = " + rScore);
  }
}
function html() {
  if (questionCount < 5) {
    htmlScore += 1;
    questionCount += 1;
    console.log("question count = " + questionCount + " html score = " + htmlScore);
  }
}

function calculateResults() {
  if (questionCount == 5) {
    const scores = [javaScore, pythonScore, rScore, htmlScore];
    const languageNames = ["Java", "Python", "R", "HTML"];
    for (var i = 0; i < 6; i++) {
      if (scores[i] > greatest) {
        language = languageNames[i];
        greatest = scores[i];
      }
      if (greatest > 0) {
        result.innerHTML = "You are " + language + "!"
      }
    }
  }
}

function restartQuiz() {
  questionCount = 0;
  javaScore = 0;
  pythonScore = 0;
  rScore = 0;
  htmlScore = 0;
  console.log("Restarted!");
  location.reload();
  document.getElementById("q1a1").disabled = false;
  document.getElementById("q1a2").disabled = false;
  document.getElementById("q1a3").disabled = false;
  document.getElementById("q1a4").disabled = false;
  document.getElementById("q2a1").disabled = false;
  document.getElementById("q2a2").disabled = false;
  document.getElementById("q2a3").disabled = false;
  document.getElementById("q2a4").disabled = false;
  document.getElementById("q3a1").disabled = false;
  document.getElementById("q3a2").disabled = false;
  document.getElementById("q3a3").disabled = false;
  document.getElementById("q3a4").disabled = false;
  document.getElementById("q4a1").disabled = false;
  document.getElementById("q4a2").disabled = false;
  document.getElementById("q4a3").disabled = false;
  document.getElementById("q4a4").disabled = false;
  document.getElementById("q5a1").disabled = false;
  document.getElementById("q5a2").disabled = false;
  document.getElementById("q5a3").disabled = false;
  document.getElementById("q5a4").disabled = false;
  performQuiz();
}

function q1a1disable() {
  document.getElementById("q1a2").style.opacity = 0.3;
  document.getElementById("q1a3").style.opacity = 0.3;
  document.getElementById("q1a4").style.opacity = 0.3;
}
function q1a2disable() {
  document.getElementById("q1a1").style.opacity = 0.3;
  document.getElementById("q1a3").style.opacity = 0.3;
  document.getElementById("q1a4").style.opacity = 0.3;
}
function q1a3disable() {
  document.getElementById("q1a1").style.opacity = 0.3;
  document.getElementById("q1a2").style.opacity = 0.3;
  document.getElementById("q1a4").style.opacity = 0.3;
}
function q1a4disable() {
  document.getElementById("q1a1").style.opacity = 0.3;
  document.getElementById("q1a2").style.opacity = 0.3;
  document.getElementById("q1a3").style.opacity = 0.3;
}

function q2a1disable() {
  document.getElementById("q2a2").style.opacity = 0.3;
  document.getElementById("q2a3").style.opacity = 0.3;
  document.getElementById("q2a4").style.opacity = 0.3;
}
function q2a2disable() {
  document.getElementById("q2a1").style.opacity = 0.3;
  document.getElementById("q2a3").style.opacity = 0.3;
  document.getElementById("q2a4").style.opacity = 0.3;
}
function q2a3disable() {
  document.getElementById("q2a1").style.opacity = 0.3;
  document.getElementById("q2a2").style.opacity = 0.3;
  document.getElementById("q2a4").style.opacity = 0.3;
}
function q2a4disable() {
  document.getElementById("q2a1").style.opacity = 0.3;
  document.getElementById("q2a2").style.opacity = 0.3;
  document.getElementById("q2a3").style.opacity = 0.3;
}

function q3a1disable() {
  document.getElementById("q3a2").style.opacity = 0.3;
  document.getElementById("q3a3").style.opacity = 0.3;
  document.getElementById("q3a4").style.opacity = 0.3;
}
function q3a2disable() {
  document.getElementById("q3a1").style.opacity = 0.3;
  document.getElementById("q3a3").style.opacity = 0.3;
  document.getElementById("q3a4").style.opacity = 0.3;
}
function q3a3disable() {
  document.getElementById("q3a1").style.opacity = 0.3;
  document.getElementById("q3a2").style.opacity = 0.3;
  document.getElementById("q3a4").style.opacity = 0.3;
}
function q3a4disable() {
  document.getElementById("q3a1").style.opacity = 0.3;
  document.getElementById("q3a2").style.opacity = 0.3;
  document.getElementById("q3a3").style.opacity = 0.3;
}

function q4a1disable() {
  document.getElementById("q4a2").style.opacity = 0.3;
  document.getElementById("q4a3").style.opacity = 0.3;
  document.getElementById("q4a4").style.opacity = 0.3;
}
function q4a2disable() {
  document.getElementById("q4a1").style.opacity = 0.3;
  document.getElementById("q4a3").style.opacity = 0.3;
  document.getElementById("q4a4").style.opacity = 0.3;
}
function q4a3disable() {
  document.getElementById("q4a1").style.opacity = 0.3;
  document.getElementById("q4a2").style.opacity = 0.3;
  document.getElementById("q4a4").style.opacity = 0.3;
}
function q4a4disable() {
  document.getElementById("q4a1").style.opacity = 0.3;
  document.getElementById("q4a2").style.opacity = 0.3;
  document.getElementById("q4a3").style.opacity = 0.3;
}

function q5a1disable() {
  document.getElementById("q5a2").style.opacity = 0.3;
  document.getElementById("q5a3").style.opacity = 0.3;
  document.getElementById("q5a4").style.opacity = 0.3;
}
function q5a2disable() {
  document.getElementById("q5a1").style.opacity = 0.3;
  document.getElementById("q5a3").style.opacity = 0.3;
  document.getElementById("q5a4").style.opacity = 0.3;
}
function q5a3disable() {
  document.getElementById("q5a1").style.opacity = 0.3;
  document.getElementById("q5a2").style.opacity = 0.3;
  document.getElementById("q5a4").style.opacity = 0.3;
}
function q5a4disable() {
  document.getElementById("q5a1").style.opacity = 0.3;
  document.getElementById("q5a2").style.opacity = 0.3;
  document.getElementById("q5a3").style.opacity = 0.3;
}

function q1disable() {
  document.getElementById("q1a1").disabled = true;
  document.getElementById("q1a2").disabled = true;
  document.getElementById("q1a3").disabled = true;
  document.getElementById("q1a4").disabled = true;
}
function q2disable() {
  document.getElementById("q2a1").disabled = true;
  document.getElementById("q2a2").disabled = true;
  document.getElementById("q2a3").disabled = true;
  document.getElementById("q2a4").disabled = true;
}
function q3disable() {
  document.getElementById("q3a1").disabled = true;
  document.getElementById("q3a2").disabled = true;
  document.getElementById("q3a3").disabled = true;
  document.getElementById("q3a4").disabled = true;
}
function q4disable() {
  document.getElementById("q4a1").disabled = true;
  document.getElementById("q4a2").disabled = true;
  document.getElementById("q4a3").disabled = true;
  document.getElementById("q4a4").disabled = true;
}
function q5disable() {
  document.getElementById("q5a1").disabled = true;
  document.getElementById("q5a2").disabled = true;
  document.getElementById("q5a3").disabled = true;
  document.getElementById("q5a4").disabled = true;
}

var q1a1 = document.getElementById("q1a1");
q1a1.addEventListener("click", java);
q1a1.addEventListener("click", q1a1disable);
q1a1.addEventListener("click", q1disable);
var q1a2 = document.getElementById("q1a2");
q1a2.addEventListener("click", r);
q1a2.addEventListener("click", q1a2disable);
q1a2.addEventListener("click", q1disable);
var q1a3 = document.getElementById("q1a3");
q1a3.addEventListener("click", python);
q1a3.addEventListener("click", q1a3disable);
q1a3.addEventListener("click", q1disable);
var q1a4 = document.getElementById("q1a4");
q1a4.addEventListener("click", html);
q1a4.addEventListener("click", q1a4disable);
q1a4.addEventListener("click", q1disable);

var q2a1 = document.getElementById("q2a1");
q2a1.addEventListener("click", python);
q2a1.addEventListener("click", q2a1disable);
q2a1.addEventListener("click", q2disable);
var q2a2 = document.getElementById("q2a2");
q2a2.addEventListener("click", r);
q2a2.addEventListener("click", q2a2disable);
q2a2.addEventListener("click", q2disable);
var q2a3 = document.getElementById("q2a3");
q2a3.addEventListener("click", java);
q2a3.addEventListener("click", q2a3disable);
q2a3.addEventListener("click", q2disable);
var q2a4 = document.getElementById("q2a4");
q2a4.addEventListener("click", html);
q2a4.addEventListener("click", q2a4disable);
q2a4.addEventListener("click", q2disable);

var q3a1 = document.getElementById("q3a1");
q3a1.addEventListener("click", html);
q3a1.addEventListener("click", q3a1disable);
q3a1.addEventListener("click", q3disable);
var q3a2 = document.getElementById("q3a2");
q3a2.addEventListener("click", java);
q3a2.addEventListener("click", q3a2disable);
q3a2.addEventListener("click", q3disable);
var q3a3 = document.getElementById("q3a3");
q3a3.addEventListener("click", r);
q3a3.addEventListener("click", q3a3disable);
q3a3.addEventListener("click", q3disable);
var q3a4 = document.getElementById("q3a4");
q3a4.addEventListener("click", python);
q3a4.addEventListener("click", q3a4disable);
q3a4.addEventListener("click", q3disable);

var q4a1 = document.getElementById("q4a1");
q4a1.addEventListener("click", python);
q4a1.addEventListener("click", q4a1disable);
q4a1.addEventListener("click", q4disable);
var q4a2 = document.getElementById("q4a2");
q4a2.addEventListener("click", r);
q4a2.addEventListener("click", q4a2disable);
q4a2.addEventListener("click", q4disable);
var q4a3 = document.getElementById("q4a3");
q4a3.addEventListener("click", html);
q4a3.addEventListener("click", q4a3disable);
q4a3.addEventListener("click", q4disable);
var q4a4 = document.getElementById("q4a4");
q4a4.addEventListener("click", java);
q4a4.addEventListener("click", q4a4disable);
q4a4.addEventListener("click", q4disable);

var q5a1 = document.getElementById("q5a1");
q5a1.addEventListener("click", java);
q5a1.addEventListener("click", q5a1disable);
q5a1.addEventListener("click", q5disable);
var q5a2 = document.getElementById("q5a2")
q5a2.addEventListener("click", html);
q5a2.addEventListener("click", q5a2disable);
q5a2.addEventListener("click", q5disable);
var q5a3 = document.getElementById("q5a3");
q5a3.addEventListener("click", python);
q5a3.addEventListener("click", q5a3disable);
q5a3.addEventListener("click", q5disable);
var q5a4 = document.getElementById("q5a4");
q5a4.addEventListener("click", r);
q5a4.addEventListener("click", q5a4disable);
q5a4.addEventListener("click", q5disable);

var calculate = document.getElementById("calculate").addEventListener("click", calculateResults);
var restart = document.getElementById("restart").addEventListener("click", restartQuiz);
