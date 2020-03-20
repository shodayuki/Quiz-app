class Quiz {
  constructor({question, correctAnswer, incorrectAnswers}){
    console.log(question, correctAnswer, incorrectAnswers, '@@@@@@');

    this._question = question;
    this._correctAnswer = correctAnswer;
    this._incorrectAnswers = [...incorrectAnswers];
  }
}

export default Quiz;