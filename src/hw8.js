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
  this.id = idmaker(1, 999);
  this.score = scoremaker(0, 100);
  let attresult = attmaker();
  this.att = attresult[0];
  this.common = attresult[1];
  // this.prize = ;
  // this.goodgrade = ;
  // this.badgrade = ;
  // this.resultgrade = ;
}

// 1 ~ 999까지만 만들고 앞에 0붙이기 8자리
// 중복 막기
function idmaker(min, max) {
  // let str = "";
  // for (var i = 0; i < 8; i++) {
  //   str += Math.floor(Math.random() * 10);
  // }
  // return str;

  let a = Math.floor(Math.random() * (max - min + 1) + min);
  let b = "00000";
  switch (a) {
    case a >= 100:
      b += a;
      break;
    case a >= 10 && a < 100:
      b += "0" + a;
      break;
    case a < 10:
      b += "0" + a;
  }
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
// 홀수가 나오면 +1
// max가 넘어가면 -1
// if else 사용하지 않기 and while 제거

// idmaker scoremaker attmaker commaker 를 maker라는 fnc으로 통일하기
function attmaker() {
  let att = Math.floor(Math.random() * (10 - 1 + 1) + 1);

  //함수안에 함수 선언 금지
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

// function ranking() {

// }
