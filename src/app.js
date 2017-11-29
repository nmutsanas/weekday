import {Question} from './question';

export class App {
  constructor() {
    this.year = 2018; // TODO: make this configurable

    this.testType = 'quiz';
    this.initTest(this.testType);
  }

  initTest(testType){
    console.log("initializing test " + testType);
    this.testType = testType;
    this.answered = {correct: 0, wrong: 0};
    this.questions = [];
    for (let month = 0; month < 12; month++) {
      this.questions[month] = new Question(month, this.year, testType);
    }
  }

  evaluateAnswer(question, i) {
    if (question.answer === i) {
      this.answered.correct++;
      question.answerEvaluation = "good";
    } else {
      this.answered.wrong++;
      question.answerEvaluation = "bad";
    }
    this.fadeBody(question.answerEvaluation);
    console.log('Answer given for ' + question.description + ': ' + i + ', correct is : ' + question.answer);
  }

  fadeBody(value) {
    let current = document.body.className;
    let newClass = value + "fade";
    if (current === newClass) {
      newClass += "2";
    }
    document.body.className = "a";
    document.body.className = newClass;
  }


  weekdayByIdx(day) {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return days[day];
  }
}
