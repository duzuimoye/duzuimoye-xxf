// flatten 展平 推平
// 1.flatten 功能以后慢慢学
// 2.数组的一些超纲但常用，npm 包装了这种功能
// lodash underscore
// 3.代码运行的宿主环境是命令行
// npm init -y package.json
// yarn add lodash
// 在当前文件中，引入node_modules下的lodash
// 使用它完成flatten，看文档
// 第一种
var  arr  = [1,2,[3,4],[5,[6,7]]];
function flatten(arr) { return arr.toString().split(',')} 
console.log(flatten(arr))

// 第二种
const  _=require('lodash')
var  arr  = [1,2,[3,4],[5,[6,7]]];
console.log(_.flattenDeep(arr))


// var array = [1, [2, [3, [4]], 5]];
 
// _.flattenDepth(array, 1);
// console.log(array)
// const _=require('lodash')
// 去重
var arr = [1,2,2,6,6,8];
console.log(_.uniq(arr))



