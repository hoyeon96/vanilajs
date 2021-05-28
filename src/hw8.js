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
  this.id = maker(1, 999, 0);
  this.score = maker(0, 100, 1);
  this.att = maker(0, 10);
  this.common = maker(0, this.att);
  // this.prize = ;
  // this.goodgrade = ;
  // this.badgrade = ;
  // this.resultgrade = ;
}

// 난수생성 함수
function maker(min, max, choice = 2) {
  let number = Math.floor(Math.random() * (max - min + 1) + min);

  switch (choice) {
    //id maker
    case 0:
      if (number )
    
    //score maker
    case 1:
      if (number % 2 !== 0) number++;
      if (number > 100) number -= 2;
      return number;
    
    //att, common maker
    default:
      return number;
  }
}

// 1 ~ 999까지만 만들고 앞에 0붙이기 8자리
// 중복 막기
function idmaker(min, max) {
  let n = Math.floor(Math.random() * (max - min + 1) + min);

  return n;
}

const studentlist = [];
for (var i = 0; i < 50; i++) {
  studentlist[i] = new student();
}

console.log(studentlist);

function ranking() {}
