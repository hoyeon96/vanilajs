const array = [1, 2, 3, 4, 5];
console.log(array);
console.log(array[0]);
// console.log(array[-1]);
// 처럼 slicing 불가능

const object = [
  {
    name: "윤호연",
    age: "26"
  },
  {
    name: "김태훈",
    age: "20"
  }
];
console.log(object);
console.log(object[0]);
console.log(object[0].name);
console.log(object[1].age);

object.push({ name: "이승현", age: "21" });
console.log(object);
console.log(object.length);

// 과제 5
// 배열 안에 배열 넣기
// 배열 안에 객체 넣기
// 객체 안에 배열 넣기
// 객체 안에 객체 넣기
// 선언 후 각각의 값을 불러내는 연습하기

const arinar = ["김태훈", "바보", ["윤호연", "더", "바보"]];
const arinst = [{}];
const stinar = {};
const stinst = {};
