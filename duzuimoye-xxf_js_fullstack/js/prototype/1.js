var obj ={a:1};
console.log("a" in obj);
console.log("toString" in obj);
// 原型链对象上是否具有属性
// obj 对象
// name 属性名
// obj a false
// obj b false
// obj toString true
function hasPrototypeProperty(obj,name){
  return name in obj && !obj.hasOwnProperty(name)//左边为true 才会执行
}
console.log(hasPrototypeProperty(obj,"toString"));
console.log(hasPrototypeProperty(obj,"a"));

// 函数是对象 object
// Person 可以是程序员 作者 作曲家 作者的原型链对象
//prototype 属性 in obj in object
// prototype 入口？ js 把有对象的其实都是function 构造的
//函数都有的属性
// 实例 Instance p1 p2 都有吱声的属性name 
// 由person 构建函数 this.name =
// Person constructor
// Person.prototype.sayName
// 新的对象构建
// 不是类与对象的关系 父子
// 原型关系
// constructor 属性设置 车头
// constructor->prototype
// 方法，prototype 车身
const p1 = new Person('cjk')
function Person(name){
    this.name = name;
}
//函数
// prototype 在js里面 几乎所有的函数都有一个prototype的属性
// 指针一样 指向对象 属性或方法的集合
Person.prototype={
    getName:function(){
        return this.name;
    }
}
//js原型链继承
// constructor Person name+books 属性
// prototype Person的方法链+方法链（自身方法）
function Author(name,books){
    Person.call(this,name);
    this.books =books;
    // this,name=name;
    // this.books=books;
    // var bill = new Author("zk","论撩骚的重要性");
    // document.write(bill);
}
extend (Author,Person);
Author.prototype.getBooks = function(){
    return this.books;
}
Author.prototype.getName = function(){
    return this.name;
}
function extend(subClass,superClass){
    // 第三者干净
    var F = function(){};
    F.prototype = superClass.prototype;
    subClass.prototype = new F ();//新的对象
    //失去构造函数
    // console.log(subClass.prototype.constructor);
    subClass.prototype.constructor = subClass;
}
const author=new Author('曾凯','论撩骚的重要性');
// java 对象拥有新的方法和属性的一份拷贝
// ？ author 函数 prototype 指向Author 的prototype
// this 实例对象 含糊是 this 指向 作用域内可以找到属性
console.log(author.getName())
console.log(author.getBooks())
// Person.prototype.getName = function(){
//     return this.name;
// }