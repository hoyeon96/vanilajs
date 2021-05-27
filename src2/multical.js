const array = [];
let text = "";
if (array.length === 0) {
  text = "배열이 비어있습니다.";
} else {
  text = "배열이 비어있지 않습니다.";
}
console.log(text);

// 삼항 연산자 공부 하기
const array2 = [1, 3, 5];
let text2 =
  array2.length === 0 ? "배열이 비어있습니다." : "배열이 비어있지 않습니다.";
// 조건문 ? true일때 : false일때 ;
console.log(text2);

const condition1 = false;
const condition2 = false;

const value = condition1 ? "와우!" : condition2 ? "blabla" : "foo";

console.log(value);
// 이런 코드는 지양해야 하는 코드입니다. 가독성을 해치기 때문입니다.
// 차라리 길더라도 if else 문을 사용하는 것을 추천하는 바입니다.
