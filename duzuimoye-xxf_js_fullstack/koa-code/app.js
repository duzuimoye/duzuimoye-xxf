// 手写一个koa
const koa = require('./lib/application');
const app = new koa();
app.use(() =>{
  ctx.body = 'hello world';
})
app.listen(3000); 