// function calculateCircleArea(r = 1) {
//   //ES5 문법
//   //r = r||1; // 1을 기본값으로 주고 싶을 때
//             // false => 1

//   return Math.PI * r * r;
// }

const calculateCircleArea = (r = 1) => Math.PI * r * r;

const area = calculateCircleArea();
console.log(area); // 50.26548245743669
