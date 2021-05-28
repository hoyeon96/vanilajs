class Animal {
  constructor(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
  }
  say() {
    console.log(this.sound);
  }
}

const dog = new Animal("개", "블랙", "멍!");
const cat = new Animal("고양이", "키티", "냥~");

dog.say();
cat.say();

class Dog extends Animal {
  constructor(name, sound) {
    super("개", name, sound);
  }
}
class Cat extends Animal {
  constructor(name, sound) {
    super("고양이", name, sound);
  }
}
const dog1 = new Dog("파블로프", "컹컹");
const cat1 = new Cat("개냥이", "뭐주인아");

dog1.say();
cat1.say();

class Food {
  constructor(name) {
    this.name = name;
    this.brands = [];
  }
  addBrand(brand) {
    this.brands.push(brand);
  }
  print() {
    console.log(`${this.name}을 파는 음식점 리스트 :`);
    console.log(this.brands.join(", "));
  }
}

const pizza = new Food("pizza");
pizza.addBrand("domino pizza");
pizza.addBrand("mr pizza");
pizza.addBrand("반올림 피자샾");

const chicken = new Food("chicken");
chicken.addBrand("푸라닭");
chicken.addBrand("BBQ");
chicken.addBrand("쌀통닭");

pizza.print();
chicken.print();

// 과제 2
// 클래스 만들기
// 대학교 학생
// 전공, 학번, 학점, ~~

const student {
  constructor(ddd, ttt, asdf){

  }
}