var student1 = {
  id: "10000001",
  score: 80,
  att: 3,
  common: 1,
  prize: "",
  goodgrade: "", // good pro 채점
  badgrade: "", // bad pro  채점
  resultgrde: "" // good pro vs bad pro 중 더 잘한거
};

// console.log(student1);

function student(id, score, att, common) {
  this.id = idmaker();
  this.score = scoremaker(0, 100);
  let attresult = attmaker();
  this.att = attresult[0];
  this.common = attresult[1];
  // this.prize = ;
  // this.goodgrade = ;
  // this.badgrade = ;
  // this.resultgrade = ;
}

function idmaker() {
  let str = "";
  for (var i = 0; i < 8; i++) {
    str += Math.floor(Math.random() * 10);
  }
  return str;
}

function scoremaker(min, max) {
  while (1) {
    let randomscore = Math.floor(Math.random() * (max - min + 1) + min);
    if (randomscore % 2 === 0) {
      return randomscore;
    } else {
      randomscore = Math.floor(Math.random() * (max - min + 1) + min);
    }
  }
}

function attmaker() {
  let att = Math.floor(Math.random() * (10 - 1 + 1) + 1);
  function commaker() {
    let com = Math.floor(Math.random() * (att - 1 + 1) + 1);
    return [att, com];
  }
  return commaker();
}

const studentlist = [];
for (var i = 0; i < 50; i++) {
  studentlist[i] = new student();
}

console.log(studentlist);
