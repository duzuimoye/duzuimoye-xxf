// Function.prototype.bind2 = function(context){
//   var args = Array.prototype.slice.call(arguments,1)
//   var that = this;
//   // this就是当前的对象
//   // console.log(context) 第一种
//   return function() {
//     // bar是谁？ bar ->Function
//     // .apply(context)方法
//     const bindArgs =Array.prototype.slice.call(arguments);
//     that.apply(this instanceof that ? this:context,args.concat(bindArgs));
//     //console.log(context); //第二种
//   }
// }
// 用bind方法
// var foo = {
//   value: 1
// }
// function bar(name,age) {
//   console.log(this.value);
//   console.log(name);
//   console.log(age);
// }
// bar.apply(foo);bar.call(foo)
// const bar2 = bar.bind2(foo,'daisy','18');
//bar2(); //打开
// bind?
// 1.返回一个新的函数，高阶函数 return function(){}
// 2.this的指向？利用了闭包


Function.prototype.bind2 = function(context){
  var self = this;
  // context
  var args = Array.prototype.slice.call(arguments,1);
  var fNOP = function() {}
  var bound = function() {
    var bindArgs = Array.prototype.slice.call(arguments);
    self.apply(this instanceof self? this:context,args.concat(bindArgs));
  }
  fNOP.prototype = this.prototype;
  bound.prototype = new fNOP();
  return bound;
}
var value = 2;
var foo = {
  value:1
}
function bar(name,age){
  this.habit = 'shopping';
  console.log(this.value);
  console.log(name);
  console.log(age);
}
bar.prototype.friend = 'kevin';
var bindFoo = bar.bind(foo,'daisy');
var obj = new bindFoo('18');
console.log(obj.habit);
console.log(obj.friend);
bindFoo()