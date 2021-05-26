function Animal(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
  this.say = function () {
    console.log(this.sound);
  };
}

const dog = new Animal("개", "윤호연", "멍멍");
const cat = new Animal("고양이", "엘리자베스", "냐옹");

dog.say();
cat.say();
