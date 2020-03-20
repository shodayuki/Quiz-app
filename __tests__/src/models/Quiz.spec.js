import Quiz from '../../../src/models/Quiz';

const createMockQuiz = () => {
  return {
    question: 'クイズの問題',
    correctAnswer: '答え',
    incorrectAnswers: [
      '不正解1',
      '不正解2',
      '不正解3'
    ],
  }
};

describe('Quizクラスのテスト', () => {
  it('importチェック', () => {
    expect( typeof Quiz ).toStrictEqual('function');
  });

  describe('インスタンスメソッド', () => {
    describe('constructor', () => {
      it('コンストラクタで渡した値をプロパティに保持する', () => {
        const quizData = createMockQuiz();
        const quiz = new Quiz(quizData);

        expect( quiz._question ).toStrictEqual(quizData.question);
        expect( quiz._correctAnswer ).toStrictEqual(quizData.correctAnswer);
        expect( quiz._incorrectAnswers ).toStrictEqual(quizData.incorrectAnswers);
      });
    });
  });
});