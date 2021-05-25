function getGrade(score) {
  if (score === 100) {
    return "A+";
  } else if (score >= 90) {
    return "A";
  } else if (score === 89) {
    return "B+";
  } else if (score >= 80) {
    return "B";
  } else if (score === 79) {
    return "C+";
  } else if (score >= 70) {
    return "C";
  } else if (score === 69) {
    return "D+";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

const grade = getGrade(90);
console.log(grade);

// const view = a => a * a -> 파라미터가 하나이거나 리턴이 바로 될 때

const add = (a, b) => {
  // parameter
  return a + b;
};

console.log(add(1, 2));

// 과제 4
// 과연 => 로 만든 함수와 function으로 만든 함수는 정말 같은것인가?
// 차이가 있다면 어떠한 차이가 있는지 예시를 들어보자!

function plus(a, b) {
  const sum = a + b;
  return sum;
}
console.log(plus(3, 5));

const plus2 = (a, b) => {
  return a + b;
};
console.log(plus2(3, 5));
