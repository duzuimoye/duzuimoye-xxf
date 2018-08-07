// 数据缓存
const cache = new WeakMap();

function countOwnKeys(obj) {
  if(cache.has(obj)) {
    console.log('cached');
    return cache.get(obj)
  }else {
    // console.log('cjk');
    const count = Object.keys(obj).length;
    cache.set(obj, count);
    return count;
  }
}

const obj = {a:1, b:2, c:3};
console.log(countOwnKeys(obj));
console.log(countOwnKeys(obj));
console.log(countOwnKeys(obj));