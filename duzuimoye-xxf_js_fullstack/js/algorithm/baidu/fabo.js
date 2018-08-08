// 菲波那切数列
// 1,1,2,3,5，8,13,21
// fn=f(n-1)+f(n-2)
// var temp;
// var num1 = 1;
// var num2 = 1;
// //2.先把第二个变量存储进入第三个变量汇总，第二个变量重新赋值成为第一个和第二个之和
// for(var i=1;i<=20;i++){
//     temp = num2;
//     num2 = num1 + num2;
//     //3.把存储好的第三个变量赋值给第一个变量。
//     num1 = temp;
//     //4.执行10次。（因为前两项不需要计算，所以只需要执行10次）
// }

// console.log(num2);


// let count =0;
// function fabo(n) {
//   count++;
//   if(n==1||n==2) {
//     return 1;
//   }
//   return fabo(n-1)+fabo(n-2);
// }
// console.log(fabo(20),count);


let count = 0;
function fn(n) {
  let cache = {};
  function _fn(n) {
    if(cache[n]) {
      return cache[n];
    }
    count ++;
    if(n ==1 ||n == 2) {
      return 1;
    }

    let prev = _fn(n-1);
     cache[n-1] = prev;
     let next = _fn(n-2);
     cache[n-2]=next;
     return prev + next;
  }
  return _fn(n)
}
console.log(fn(30), count)
