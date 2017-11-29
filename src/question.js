export class Question {

  constructor(month, year, testType) {
    this.month = month;
    if (testType === 'quiz') {
      this.date = Question.randomDateIn(month, year);
      this.description = this.date.toLocaleString("en-US", {day: 'numeric', month: 'long'});
      this.answer = this.date.getDay();
      console.log(this.description + ": " + this.answer);
    } else { // i.e. offset
      this.description = new Date(year, month, 1).toLocaleString("en-US", {month: 'long'});
      this.answer = Question.getOffset(month, year);
    }
    this.answerEvaluation = '';
  }

  static randomDateIn(month, year) {
    let totalDays = new Date(year, month, 0).getDate();
    let randomDay = Math.floor(Math.random() * totalDays) + 1;
    return new Date(year, month, randomDay);
  }

  static OFFSETS = [6, 2, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];

  static getOffset(month, year) {
    let result = Question.OFFSETS[month];
    if (Question.isLeapYear(year) && month < 2) {
      return result - 1;
    }
    return result;
  }

  static isLeapYear(year) {
    return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
  }

}
