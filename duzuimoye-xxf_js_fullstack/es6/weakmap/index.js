// 在DOM上保存相关数据
const map = new WeakMap();
// map.set(1,2);
// map.set(null,2);
// TypeError: Invalid value used as weak map key
// WeakMap只接受对象作为键名

var wm1 = new WeakMap();
var wm2 = new WeakMap();
var wm3 = new WeakMap();

// WeakMap Key
var o1 = {},
  o2 = function() {};


wm1.set(o1,37);
wm2.set(o2,'jack');
console.log(wm1.get(o1));
console.log(wm2.get(o2));

console.log(wm1.has(o1));
console.log(wm1.delete(o1));
console.log(wm1.has(o1));