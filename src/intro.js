console.log("Hello JavaScript!!");
console.log(1 + 2 + 3 + 4);
console.log("안녕하세요!");
console.log("JavaScript를 배워봅시다");

//변수
let value = 1;
console.log(value);
value = 2;
console.log(value);
// let value = 1 ;
// let value = 2 ;
// let 은 위와 같이 재정의가 불가능함으로, 사용된 변수 인지를 쉽게 확인하여
// 관리할 수 있다.
// 하지만 var의 경우는
var hoyeon = "멍청이";
var hoyeon = "양아치";
console.log(hoyeon);
// 위와 같이 재정의 하여 사용하여도 문제 없이재정의가 되어 사용된 변수를 다시
// 사용하거나 제 역할을 하지 못하는 경우가 있다.
// 하지만 var이 없어지는 것은 안된다. 여러가지의 이유가 있다.
// 그 이유가 무엇인가? <과제1>

//상수
const a = 1; // 는 상수로서 변경이 불가능 한 값이다. 처음 선언한 값이
//그대로 유지된다.
// a=3;
// 과 같이 변경하려고 시도시 에러가 뜨는 것을 볼 수 있다.

let text = "hello";
let name = "좌바스크립트";
// string 이나 숫자를 가리지 않고 선언 및 사용이 가능하다.
let good = true;
let loading = false;
// bool 값 또는 boolean이라고 불리운다.

let friend = null;
let criminal = undefined;
// 없는 값 즉 빈 값을 말하는 것 null은 의도된 빈값을 표현하고,
// undefined는 의도되지 않은 빈값을 얘기한다.

//연산자
// = 대입연산자 a=3 -> a변수에 3이라는 값을 대입하여라

let b = 1 + 2;
console.log(b);

// +, -, *, / 연산도 있으며 추가적으로
// +=, -=, *=, /= 연산도 있다.
// 추가적인 연산의 경우는 console.log 를 이용하여 저번 시간에 응용해보았으니
// 각각의 예제를 작성하여 생각하는 바가 정확히 나오는지 확인해보자 (과제2)

// 부정연산
const c = !true;
console.log(c);

const d = !false;
console.log(d);

const e = true && true;
console.log(e);

let f = false && false;
f = false && true;
console.log(f);
f = true && false;
console.log(f);

let t = true || false;
t = false || true;
console.log(t);
t = true || true;
console.log(t);
t = false || false;
console.log(t);
// 위 논리 연산자는 결과를 보기 전에 결과를 충분히 생각해 보고 예측할 필요가 있음

const value2 = !((true && false) || (true && false) || !false);
console.log(value2);
//논리 연산자의 우선순위는 not -> and -> or
