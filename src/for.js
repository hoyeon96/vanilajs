for (let i = 0; i < 10; i++) {
  console.log(i);
}

const names = ["멍멍이", "야옹이", "멍뭉이"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

let numbers = [10, 20, 30, 40, 50];
for (let number of numbers) {
  console.log(number);
}

const doggy = {
  name: "멍멍이",
  sound: "멍멍",
  age: 2
};

console.log(Object.entries(doggy));
console.log(Object.keys(doggy));
console.log(Object.values(doggy));

console.log(Object.keys(doggy)[1]);

for (let key in doggy) {
  console.log(`${key}: ${doggy[key]}`);
}

for (let i = 0; i < 10; i++) {
  if (i === 2) continue; // 다음 루프를 실행
  console.log(i);
  if (i === 5) break; //반복문을 끝내기
}

function sumOf(nubmers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

const result = sumOf([1, 2, 3, 4, 5]);
console.log(result);

const result2 = sumOf(numbers);
console.log(result2);

// 과제 6
function biggerThanThree(numbers) {
  /* 구현해보세요 */
}

const numberarray = [1, 2, 3, 4, 5, 6, 7];
console.log(biggerThanThree(numberarray));
// [4,5,6,7] 배열로 출력되도록
