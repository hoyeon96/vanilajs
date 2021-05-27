const numbers = [1, 2, 3, 4, 5];

let sum = 0;
numbers.forEach((n) => {
  sum += n;
});
console.log(sum);

sum = 0;

sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
// 0은 accumulator의 초기값
console.log(sum);

// recursive 함수처럼
// 배열이 있는데 처음부터 끝까지 돌리고싶어
// 돌릴때 반복을 할때 forEach는 내부값만 반복 시킴
// 처음부터 끝까지 고정값을 만들어 놓으면
// accumulator을 관찰자 역할로
// 함수형 프로그래밍 -> 변수를 선언하지 않는다
// 성능향상을 위해 사용

//과제 7번

function countBiggerThanTen(numbers) {
  /* 구현해보세요 */
  let count = 0;
  numbers.forEach((n) => {
    if (n > 10) count++;
  });

  return count;
}

const count = countBiggerThanTen([
  11,
  22,
  41,
  413,
  5112,
  0.7,
  -9,
  -113,
  0.03,
  11.7
]);

console.log(count); // 5
