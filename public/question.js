const Question = {};

Question.getQuestion = function getQuestion(questionNum) {
  return fetch(`/api/questions/${questionNum}`)
    .then(response => response.json())
    .then(question => question.text);
};

Question.checkAnswer = function checkAnswer(questionNum, answer) {
  return fetch(`/api/questions/${questionNum}/answer`)
    .then(response => response.json())
    .then(question => question.answer.toLowerCase() == answer.toLowerCase());
};