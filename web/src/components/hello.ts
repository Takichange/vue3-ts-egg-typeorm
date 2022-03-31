// 类的定义
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} is speaking`);
    return 'hah ';
  }
}

const p1 = new Person('lin');
console.log(p1.name);
console.log(p1.speak());

// 类的继承
class Student extends Person {
  study() {
    console.log(`${this.name} is needs study`);
  }
}
const p2 = new Student('hong');
p2.study();
