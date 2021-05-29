// 난수생성 함수
function maker(min, max, count) {
  let number = [];
  for (var i = 0; i < count; i++) {
    number[i] = Math.floor(Math.random() * (max - min + 1) + min);
  }
  return number;
}

//50명 학생 생성
const studentList = [];
const calScore = [];
class student {
  constructor(id, score, att, com, prize) {
    this.id = id;
    this.score = score;
    this.att = att;
    this.com = com;
    this.prize = prize;
    this.goodGrade = "";
    this.badGrade = "";
    this.resultGrade = "";
  }
  calcScore() {
    let calScore = this.score - this.att * 0.5;
    if (calScore < 0) calScore = 0;
    return calScore;
  }
  goodProf() {
    let score = this.score;
    if (this.att - this.com >= 5) return "F";
    if (score >= 95) {
      return "A+";
    } else if (score >= 90) {
      return "A";
    } else if (score >= 85) {
      return "B+";
    } else if (score >= 80) {
      return "B";
    } else if (score >= 75) {
      return "C+";
    } else if (score >= 70) {
      return "C";
    } else if (score >= 65) {
      return "D+";
    } else if (score >= 60) {
      return "D";
    } else {
      return "F";
    }
  }
  badProf(prize) {
    if (this.att - this.com >= 5) return "F";
    let temp = studentList.length;
    console.log(temp);
  }
}

// ID 생성
let id = maker(1, 999, 50);

// 중복 제거
// for (let i = 0; i < 50; i++) {
//   for (let j = i; j < 50; j++) {}
// }

// 점수 생성
let score = maker(0, 100, 50);
for (let i = 0; i < 50; i++) {
  if (score[i] % 2 !== 0) score[i] += 1;
  if (score[i] > 100) score[i] -= 2;
}

// 결석횟수 생성
let att = maker(0, 10, 50);

// 유고결석 생성 및 50명 난수배치
for (let i = 0; i < 3; i++) {
  let com = maker(0, att[i], 1);
  studentList[i] = new student(id[i], score[i], att[i], com[0]);

  // calScore[i] = calculateScore(score[i], att[i]);
  calScore[i] = studentList[i].calcScore();
  studentList[i].goodGrade = studentList[i].goodProf(calScore[i]);
  studentList[i].badGrade = studentList[i].badProf(studentList[i].prize);

  studentList[i].resultGrade = "";
}
// 학생 리스트 점수로 랭킹 매기기
ranking(calScore);

//등수 매기기 함수
function ranking(arr) {
  // 오름차순으로 정렬
  let sorted = arr.slice().sort(function (a, b) {
    return b - a;
  });
  let ranks = arr.map(function (v) {
    return sorted.indexOf(v) + 1;
  });
  for (let i = 0; i < 3; i++) {
    studentList[i].prize = ranks.shift();
  }
}

console.log(calScore);
console.log(studentList);

// console.log(studentList[0].score);
// console.log(studentList[0].calcScore());
// console.log(studentList[0].goodProf());
console.log(studentList[0].badProf());

console.log(studentList.length);
