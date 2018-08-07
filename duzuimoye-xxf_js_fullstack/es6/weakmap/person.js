// 私有属性
const privateData = new WeakMap();

class Person {
  constructor (name, age) {
    // this.name = name;
    // this.age = age;
    privateData.set(this,{name,age})
  }
  getName() {
    return privateData.get(this).name;
  }
  getAge() {
    return privateData.get(this).age;
  }
}

const zk = new Person('zk',18);
// Tom.name = '小徐';
console.log(zk.getName());