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
// 과제 6-1
// 1. bt3 배열 새로 만들지 않기
// 2. 오름차순 출력하기
// 3. 없으면 NULL
function biggerThanThree(numbers) {
  /* 구현해보세요 */

  //  구현해보고 sort를 이용해서 정렬해보기
  const bt3 = numbers
    .filter((n) => n > 3)
    .sort(function (a, b) {
      return a - b;
    });

  // for (let i = 0; i < bt3.length; i++) {
  //   let temp;
  //   for (let j = 0; j < bt3.length - 1 - i; j++) {
  //     if (bt3[j] - bt3[j + 1] > 0) {
  //       temp = bt3[j];
  //       bt3[j] = bt3[j + 1];
  //       bt3[j + 1] = temp;
  //     }
  //   }
  //   if (!temp) {
  //     break;
  //   }
  // }
  if (bt3.length === 0) return null;
  return bt3;
}

const numberarray = [6, 5, 2, 3, 5, 4];
// 3 3 1 2
// 3 1 2 3

console.log(biggerThanThree(numberarray));
