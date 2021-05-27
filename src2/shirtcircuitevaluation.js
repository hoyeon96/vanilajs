//단축평가

const dog = {
  name: "호연이"
};

function getName(animal) {
  // if(!animal){
  //   return undefined;
  // }
  // return animal.name;
  // 단축
  return animal && animal.name;
}

const name = getName(dog);

// const name = getName();
console.log(name);

// and는 앞에 잇는 값이 참이면 뒤에 값이 보임
// A&&B는 truety하면 B를  falsy하면 A를 보여준다
console.log(true && "hello"); // hello
console.log(false && "hello"); // false
console.log("hello" && "bye"); // bye
console.log(null && "bye"); // null
console.log(undefined && "bye"); // undefined
console.log("" && "bye"); // ''
console.log(0 && "bye"); // 0
console.log(1 && "bye"); // bye
console.log(1 && 3); // 3
console.log([] && 3); // 3

const namelessdog = {
  name: ""
};

// A||B는 truety하면 A를  falsy하면 B를 보여준다
function getName2(animal) {
  const name = animal && animal.Name;
  return name || "이름이 없는 아이입니다.";
  // if (!name) {
  //   return "이름이 없는 아이입니다.";
  // }
  // return name;
}

const name2 = getName2(namelessdog);
console.log(name2);
