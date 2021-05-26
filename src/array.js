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
const arinst = [
  {
    id: "201421450",
    name: "윤호연",
    score: 88,
    att: 3,
    common: 1
  },
  {
    id: "201600001",
    name: "고인물",
    score: 77,
    att: 7,
    common: 0
  },
  {
    id: "202121422",
    name: "청정수",
    score: 90,
    att: 0,
    common: 0
  }
];
const stinar = {
  xnum: [1, 2, 3, 4, 5],
  ynum: [1, 2, 3, 4, [5, 10, 100]]
};
const stinst = {
  map1: {
    loc: "경기도 수원시",
    place: "수원 화성",
    food: "수원왕갈비"
  },
  map2: {
    loc: "서울특별시 강남구",
    place: "강남역",
    food: "스타벅스"
  },
  map3: {
    loc: "부산광역시",
    place: "광안리 해수욕장",
    food: {
      f1: "부산돼지국빱",
      f2: "부산어묵"
    }
  }
};

console.log(arinar[0]); // 김태훈
console.log(arinar[2][2]); // 바보
console.log(arinar[2][1] + arinar[1]); // 더바보

console.log(arinst[0].name); // 윤호연
console.log(arinst[1].score); // 77
console.log(arinst[2]); // {id:"202121422"~~~}

console.log(stinar.xnum); // [1,2,3,4,5]
console.log(stinar.xnum[1] * stinar.ynum[2]); // 6
console.log(stinar.ynum[4][2]); // 100

console.log(stinst.map1);
console.log(stinst.map1.food); // 수원왕갈비
console.log(`${stinst.map2.loc}의 유명한 먹거리는 ${stinst.map2.food}입니다.`);
