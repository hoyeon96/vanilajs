const trash = {
  name: "윤호연",
  age: "26"
};
const dog = {
  name: "호연",
  age: "26"
};

const building = {
  floor: {
    team: "1팀"
  }
};

console.log(trash.name);
console.log(trash.age);

console.log(trash);

function print(info) {
  const text = `${info.name}의 나이는 ${info.age}입니다.`;
  console.log(text);
}
print(trash);
print(dog);

console.log(building.floor.team);
