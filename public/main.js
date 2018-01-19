window.appQuiz = new UserQuiz();

async function startQuiz() {
  const question = await appQuiz.getQuestion();
  showQuestion(question);
}

function showQuestion(question) {
  document.getElementById("app-start-area").classList.add("hidden");
  document.getElementById("play-again-area").classList.add("hidden");
  document.getElementById("question-area").classList.remove("hidden");
  document.getElementById("question").innerHTML = question;
  document.getElementById("answer-input").value = "";
}

document.getElementById("start-btn").addEventListener("click", startQuiz);
document.getElementById("answer-submit-btn").addEventListener("click", async (e) => {
  const answer = document.getElementById("answer-input").value;
  await appQuiz.checkAnswer(answer);
  appQuiz.moveToNextQuestion();
  if (appQuiz.isEnd()) {
    document.getElementById("score-cont").innerHTML = appQuiz.getScore();
    document.getElementById("question-area").classList.add("hidden");
    document.getElementById("play-again-area").classList.remove("hidden");
  } else {
    showQuestion(await appQuiz.getQuestion());
  }
});

document.getElementById("play-again-btn").addEventListener("click", async (e) => {
  appQuiz.reset();
  startQuiz();
})
