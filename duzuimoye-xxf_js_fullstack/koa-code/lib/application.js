// node (buffer 缓冲)

const Emitter = require('events');
const http = require('http');
module.exports = class Application extends Emitter {
  constructor () {
    super();
    // 可加元素 有顺序
    this.middleware = []
  }
  // 中间件是函数数组， 中间件处理函数
  use (fn) {
    if(typeof fn !== 'function') {
      throw new TypeError ('middleware must be a function');
    }
    this.middleware.push(fn);
    return this;
  }
  callback () {
    this.emit('error');
    console.log('callback from middleware');
  }
  listen(...args) {
    this.on('error', this.onerror);
    const server = http.createServer(this.callback());
    return server.listen(...args);
  }
  onerror () {
    console.log('出错了')
  }
}