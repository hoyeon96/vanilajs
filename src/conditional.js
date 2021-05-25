const a = 1;
const b = 1;
const equals = a === b;
console.log(equals);
// ===는 값을 비교할 때 쓰는 연산이다.

const c = 1;
const d = 1;
const equals2 = c == d;
console.log(equals2);
// ==도 비교 연산이긴 하다.
// 과제 3
// ==과 ===는 무슨 차이가 있는것인가?
// 예시를 들어 구분 할 수 있도록 하자.

const value = "a" !== "b";
// console.log(1 != "1");
console.log(1 != "1");
console.log(1 !== "1");
const e = 10;
const f = 15;
const g = 15;

console.log(e < f); // true
console.log(f > e); // true
console.log(f >= g); // true
console.log(e <= g); // true
console.log(f < g); // false
//위 비교 연산들의 결과가 실제로 출력해 보지 않고도 결과를 알 수 있어야만
//conditional 문법인 if 문 작성이 가능해진다.

// 추가
const h = "안녕";
const i = "하세요";
console.log(h + i); // 안녕하세요
// 이런식으로 문자 붙이는 것도 가능함.

const aa = 10;
if (aa === 5) {
  console.log("5입니다!");
} else if (aa === 10) {
  console.log("10입니다!");
} else {
  console.log("5도 아니고 10도 아닙니다.");
}

const device = "iphone";

switch (device) {
  case "iphone":
    console.log("아이폰!");
    break;
  case "ipad":
    console.log("아이패드!");
    break;
  case "galaxy note":
    console.log("갤럭시 노트!");
    break;
  default:
    console.log("모르겠네요..");
}

// 과제 3
// ==과 ===는 무슨 차이가 있는것인가?
// 예시를 들어 구분 할 수 있도록 하자.

let val1 = 2;
let val2 = "2";
let val3 = 22;

const diff1 = val1 == val2; // true
const diff2 = val1 === val2;
// 값은 각각 2로 같지만 val1의 타입은 숫자, val2의 타입은 문자형
// 이므로 false

const diff3 = 0 === false; // false
const diff4 = 0 == false; // true
console.log(diff1);
console.log(diff2);
console.log(diff3);
console.log(diff4);
