class UserQuiz {
  constructor() {
    this.currentQuestion = 1;
    this.score = 0;
  }

  getQuestion() {
    return Question.getQuestion(this.currentQuestion);
  }

  moveToNextQuestion() {
    this.currentQuestion++;
  }

  checkAnswer(answer) {
    return Question.checkAnswer(this.currentQuestion, answer).then(result => {
      if (result) this.score++;
      return result;
    });
  }

  getScore() {
    return this.score;
  }

  isEnd() {
    return this.currentQuestion > 10;
  }

  reset() {
    this.score = 0;
    this.currentQuestion = 1;
  }
}