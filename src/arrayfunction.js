// 1.
const superheroes = ["아이언맨", "캡틴 아메리카", "토르", "닥터 스트레인지"];

for (let i = 0; i < superheroes.length; i++) {
  console.log(superheroes[i]);
}

superheroes.forEach((hero) => {
  console.log(hero);
});
//객체는 안되고 배열만 가능

// 2.
const array = [1, 2, 3, 4, 5, 6, 7, 8];

// 첫번째 function 구현
let squared = [];
for (let i = 0; i < array.length; i++) {
  squared.push(array[i] * array[i]);
}
console.log(squared);

// 두번째 내장 함수 이용
squared = [];
array.forEach((n) => {
  squared.push(n * n);
});
console.log(squared);

// 내장 mapping 기능 이용
squared = [];
const square = (n) => n * n; // 함수

squared = array.map(square);
console.log(squared);

// 내장 mapping 기능 이용 코드 간략화까지
// const squared[]; 초기화상태로 선언

squared = [];
squared = array.map((n) => n * n);
console.log(squared);

// 3.
const index = superheroes.indexOf("토르");
console.log(index);

//indexOf는 몇번째 배열인지 알려주는 내장 함수

const todos = [
  {
    id: 1,
    text: "자바스크립트 입문",
    done: true
  },
  {
    id: 2,
    text: "함수 배우기",
    done: true
  },
  {
    id: 3,
    text: "객체와 배열 배우기",
    done: true
  },
  {
    id: 4,
    text: "배열 내장함수 배우기",
    done: false
  }
];

const index_value = todos.findIndex((todo) => todo.id === 4);
console.log(index_value);

// 값을 찾고 싶다면..?
console.log(todos[index_value]);

const todo = todos.find((todo) => todo.id === 4);
console.log(todo);

const tasksNotDone = todos.filter((todo) => todo.done === true);
console.log(tasksNotDone);

const tasksNotDone2 = todos.filter((todo) => todo.done); //boolean 활용
console.log(tasksNotDone2);

const numbers = [10, 20, 30, 40];
const index_numbers = numbers.indexOf(30);
console.log(index_numbers);

numbers.splice(index_numbers, 1); //index_numbers 부터 1개
console.log(numbers);

const sliced = numbers.slice(0, 2); //0번부터 2개
console.log(sliced);
console.log(numbers);

numbers.push(77);
console.log(numbers); // 비동기 구조로 인해 위에 선언된 numbers도 변경됨
// 이후 세부 설명 할거임

let val = numbers.pop();
console.log(val);
console.log(numbers);

val = numbers.shift();
console.log(val);
console.log(numbers);

numbers.unshift(5);
console.log(val);
console.log(numbers);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const concated = arr1.concat(arr2); // arr1에다가 arr2 붙임
console.log(concated);
console.log(arr1);
console.log(arr2);

console.log(concated.join()); //기본은 ,
console.log(concated.join(" "));
console.log(concated.join(", "));
console.log(concated.join(" / "));
