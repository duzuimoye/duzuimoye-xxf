//参数不限
// js 很灵活 参数的数量都可以不定
function sum(){
    // this 自动生成，
    // arguments 所有的参数

     console.log(arguments.length);
    //  类数组 js 生成的怪胎
    // Array.prototype.forEach
    let total=0;
    Array.from(arguments).forEach(i => {
        total += i;
    })
    // for (let i =0;i<=arguments.length;i++){
    //     total += arguments[i];
    // }
    // let total=0;
    // args.forEach(i => {
    //     total += i;

    // })
    return total;
}
console.log(sum(1,2,3,4,5,6,7,8,9,10));