function print(person) {
  // if (person === undefined || person === null) {
  //   console.log("person이 없습니다.");
  //   return;
  // }
  //간단히??
  // if (!person){
  //   console.log("person이 없습니다.");
  //   return;
  // }
  !person ? "person이 없습니다." : console.log(person.name);
}

const person = {
  name: "john"
};

print(person);
print();

const person2 = null;
print(person2);

console.log(!undefined); //true
console.log(!null); //true
console.log(!0); //true
console.log(!""); //true
console.log(!NaN); // true
//NaN = not a number
//
let a = 1011;
let b = "1011";
let c = "안농";

console.log(a);
console.log(b);
console.log(a == b);
console.log(a === b);

console.log(a === parseInt(b));

console.log(parseInt(c));

console.log(!1); // false
console.log(!24141252); //false
console.log(!"asdpifja"); //false
console.log(![]); // false
console.log(!["scsc"]); // false
console.log(!{ value: 1 }); // false
// console.log(!NaN); // true

// const value = { a: 1 };
// const value2 = null;
// if (value) {
//   console.log("value 가 Truthy 하네요.");
// }
// if (!value2) {
//   console.log("value가 falsy 하네요.");
// }

const value = { a: 1 };
const truthy = value ? true : false;
console.log(truthy);

// !는 중복 사용이 가능하나 그럴필요 X
